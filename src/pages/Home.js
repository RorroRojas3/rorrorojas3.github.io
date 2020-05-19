import React from "react";
import { fadeInRight, fadeInLeft, fadeInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";

import ProfilePicture from "../images/profileContact.jpg";

const Home = () => {
  return (
    <div>
      <StyleRoot>
        <div className="container-fluid h-100">
          <div className="container">
            <div className="row justify-content-center mt-4 mb-4">
              <h1
                className="justify-content-center"
                style={animations.fadeInUp}
              >
                Welcome!
              </h1>
            </div>
            <div className="row justify-content-center">
              <div
                className="col-lg align-self-center"
                style={animations.fadeInLeft}
              >
                <img
                  src={ProfilePicture}
                  className="img-fluid mb-4"
                  style={profilePicsStyle}
                  alt="Pic"
                ></img>
              </div>
              <div
                className="col-lg align-self-center"
                style={animations.fadeInRight}
              >
                <p>
                  Hello, my name is Rodrigo Ignacio Rojas Garcia. I'm a Software
                  Engineer focused on Full-Stack development. I am a person who
                  is passionate about learning and developing new software.In my
                  free time, I enjoy learning new programming languages and
                  working on my personal projects. I also love working out,
                  watching sports, and spending time with my family and friends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </StyleRoot>
    </div>
  );
};

const profilePicsStyle = {
  borderRadius: "50%",
  width: "90%",
  height: "auto",
};

const animations = {
  fadeInRight: {
    animation: "x 2s",
    animationName: Radium.keyframes(fadeInRight, "fadeInRight"),
  },
  fadeInLeft: {
    animation: "x 2s",
    animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
  },
  fadeInUp: {
    animation: "x 2s",
    animationName: Radium.keyframes(fadeInUp, "fadeInUp"),
  },
};

export default Home;
