// React components
import React from "react";

// My Components
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="container-fluid h-100">
      <Navbar></Navbar>
      <div className="row align-items-center h-100 mt-4">
        <div className="p-5 col-md-6">
          <h3>
            You can contact me directly to my email rorro.irg@gmail.com or
            rrojas@clemson.edu
          </h3>
          <h4>You can also use the form to the right to send me a message!</h4>
        </div>
        <div className="col-md-6">
          <form method="POST" action="https://formspree.io/rorro.irg@gmail.com">
            <div className="form-group">
              <label for="name">Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter your Name"
                name="name"
              />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                className="form-control"
                type="email"
                placeholder="Enter your email"
                name="_replyto"
              />
            </div>
            <div className="form-group">
              <label for="message">Message</label>
              <textarea
                className="form-control"
                type="text"
                placeholder="Enter message"
                name="message"
              />
            </div>
            <div className="text-center">
              <button className="btn btn-success" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container h-100">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Contact;
