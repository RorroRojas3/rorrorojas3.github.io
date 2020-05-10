// React components
import React from "react";
import { shake, fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

// Images
import ProfilePic from "../Images/profileContact.jpg";

const Contact = () => {
  return (
    <div>
      <StyleRoot>
        <div className="container h-100">
          <div
            className="row justify-content-center mt-4"
            style={animations.fadeIn}
          >
            <img
              className="image-fluid"
              src={ProfilePic}
              alt="Profile"
              style={profilePicsStyle}
            ></img>
          </div>
          <div
            className="row justify-content-center mt-4"
            style={animations.shake}
          >
            <form
              method="POST"
              action="https://formspree.io/rorro.irg@gmail.com"
            >
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
      </StyleRoot>
    </div>
  );
};

const profilePicsStyle = {
  borderRadius: "50%",
  width: "35%",
  height: "35%",
};

const animations = {
  fadeIn: {
    animation: "x 3s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
  shake: {
    animation: "x 3s",
    animationName: Radium.keyframes(shake, "shake"),
  },
};

export default Contact;
