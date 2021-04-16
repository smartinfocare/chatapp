import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <Header></Header>
        <section >
    <div class="container ">
	<div class="row ">
                <div className=" col-md-6 ">
            <div className="container text-center py-5">
              <h1 className="display-4">Welcome to SICS CHAT</h1>
              <p className="lead">A great place to share your thoughts with friends</p>
              <div className="mt-4">
                <Link className="btn btn-primary px-5 mr-3" to="/signup">Create New Account</Link>
                
              </div>
              <div className="mt-4">
              <Link className="btn px-5" to="/login">Login to Your Account</Link>
              </div>
            </div>                   
            </div>
            <div className="col-md-6">
                <img src="https://dsathemes.com/html/nextapp/files/images/image-02.png" />
            </div>
        </div>
</div>
</section>
        <Footer></Footer>
      </div>
    )
  }
}
