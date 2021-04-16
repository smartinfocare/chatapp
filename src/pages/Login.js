import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signin, signInWithGoogle, signInWithGitHub } from "../helpers/auth";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.googleSignIn = this.googleSignIn.bind(this);
    this.githubSignIn = this.githubSignIn.bind(this);
  }

  // set value on change in input 
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  //submit the value of  email and password
  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await signin(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  //click the button for google login
  async googleSignIn() {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  //click the button for github login
  async githubSignIn() {
    try {
      await signInWithGitHub();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (    
<div class="main-content">
 <div class="header bg-gradient-primary py-5 py-lg-6">
<div class="container">
<div class="header-body text-center mb-7">
<div class="row justify-content-center">
<div class="col-lg-5 col-md-6">
<h2 class="text-white">Welcome to <Link className="title text-dark" to="/" > SICS</Link> Chatting App!</h2>
<p class="text-lead text-light">fill the details for login and get chat experience</p>
</div>
</div>
</div>
</div>
<div class="separator separator-bottom separator-skew zindex-100">
<svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
<polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
</svg>
</div>
</div>
<div class="container mt--8 pb-5">
<div class="row justify-content-center">
<div class="col-lg-5 col-md-7">
<div class="card bg-secondary shadow border-0">
<div class="card-header bg-transparent pb-2">
<div class="text-muted text-center mt-2 mb-3"><small>Sign in with</small></div>
<div class="btn-wrapper text-center">
<a onClick={this.googleSignIn} class="btn btn-neutral btn-icon">
<span class="btn-inner--icon"><img src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/icons/common/github.svg" /></span>
<span class="btn-inner--text">Github</span>
</a>
<a onClick={this.googleSignIn} class="btn btn-neutral btn-icon">
<span class="btn-inner--icon"><img src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/icons/common/google.svg" /></span>
<span class="btn-inner--text">Google</span>
</a>
</div>
</div>
<div class="card-body px-lg-5 py-lg-5">
<div class="text-center text-muted mb-4">
<small>Or sign in with credentials</small>
</div>
<form  autoComplete="off"onSubmit={this.handleSubmit}>
<div class="form-group mb-3">
<div class="input-group input-group-alternative">
<div class="input-group-prepend">
<span class="input-group-text"><i class="ni ni-email-83"></i></span>
</div>
<input class="form-control"  placeholder="Email"  name="email"  type="email"    onChange={this.handleChange} value={this.state.email}  />
</div>
</div>
<div class="form-group">
<div class="input-group input-group-alternative">
<div class="input-group-prepend">
<span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
</div>
<input class="form-control" placeholder="Password" 
 placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password" />
              
</div>
<div className="form-group">
            {this.state.error ? (
              <p className="text-danger">{this.state.error}</p>
            ) : null}
           
          </div>
</div>
<div class="text-center">
<button type="submit" class="btn btn-primary my-4">Sign in</button>
</div>
</form>
<hr />
       <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
</div>
</div>
</div>
</div>
</div>
</div>
  );
  }
}
