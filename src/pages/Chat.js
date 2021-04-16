import React, { Component } from "react";
import Header from "../components/Header";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import "../chat.css"
export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: auth().currentUser,
      chats: [],
      content: '',
      readError: null,
      writeError: null,
      loadingChats: false
    };  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.myRef = React.createRef();
  }

  //getting the previous chat record
  async componentDidMount() {
    this.setState({ readError: null, loadingChats: true });
    const chatArea = this.myRef.current;
    try {
      db.ref("Sicschat").on("value", snapshot => {
        let chats = [];
        snapshot.forEach((snap) => {
          chats.push(snap.val());
        });
        chats.sort(function (a, b) { return a.timestamp - b.timestamp })
        this.setState({ chats });
        chatArea.scrollBy(0, chatArea.scrollHeight);
        this.setState({ loadingChats: false });
      });
    } catch (error) {
      this.setState({ readError: error.message, loadingChats: false });
    }
  }

  // set value on change in input 
  handleChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  //submit for send the message in chat box
  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ writeError: null });
    const chatArea = this.myRef.current;
    try {
      await db.ref("Sicschat").push({
        content: this.state.content,
        timestamp: Date.now(),
        uid: this.state.user.uid
      });
      this.setState({ content: '' });
      chatArea.scrollBy(0, chatArea.scrollHeight);
    } catch (error) {
      this.setState({ writeError: error.message });
    }
  }

  //for format the time from timestamp
  formatTime(timestamp) {
    const d = new Date(timestamp);
    const time = `${d.getDate()}/${(d.getMonth()+1)}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    return time;
  }

  render() {
    return (
      <div>
        <Header />

        <div className="chat-area" ref={this.myRef}>
          {/* loading indicator */}
          
          {this.state.loadingChats ? <div className="spinner-border text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div> : ""}
          {/* chat area */}
          <div className="container">
          {this.state.chats.map(chat => {
            return <p key={chat.timestamp} className={"chat-bubble " + (this.state.user.uid === chat.uid ? "current-user" : "")}>
              {chat.content}
              
              <br />
              <span className="chat-time float-right">{this.formatTime(chat.timestamp)}</span>
            </p>
          })}
           </div>
        </div>
        <div className="container">
        <form onSubmit={this.handleSubmit} >
          <div className="row">
          <textarea className="form-control" name="content" onChange={this.handleChange} value={this.state.content}></textarea>
          {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
          </div> 
          <div className="row mt-2">
          <button type="submit" className="btn btn-primary px-5 mr-5">Send</button>
          </div>   </form>
        <div className="py-5 mx-3">
          Login in as: <strong className="text-info">{this.state.user.email}</strong>
          </div>
        </div>
      </div>
    );
  }
}
