// React components
import React from "react";

// Images
import ProfilePic from "../Images/profileContact.jpg";

const Contact = () => {
  return (
    <div>
      <div className="container h-100">
        <div className="row justify-content-center">
          <img
            className="image-fluid"
            src={ProfilePic}
            alt="Profile"
            style={profilePicsStyle}
          ></img>
        </div>
        <div className="row justify-content-center mt-4">
          <h3>
            You can contact me directly to my email rorro.irg@gmail.com or
            rrojas@clemson.edu
          </h3>
          <h4>You can also use the form below to send me a message!</h4>
        </div>
        <div className="row justify-content-center mt-4">
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
    </div>
  );
};

const profilePicsStyle = {
  borderRadius: "50%",
  width: "35%",
  height: "auto",
};

export default Contact;
