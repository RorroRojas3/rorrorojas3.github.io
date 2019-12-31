import React from "react";
import ProfilePicture from "../Images/profileHome.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container-fluid h-100">
        <div className="container">
          <div className="row justify-content-center mt-4 mb-4">
            <h1 className="justify-content-center">Welcome!</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg align-self-center">
              <img
                src={ProfilePicture}
                className="img-fluid mb-4"
                style={profilePicsStyle}
                alt="Pic"
              ></img>
            </div>
            <div className="col-lg align-self-center">
              <p>
                Hello, my name is Rodrigo Ignacio Rojas Garcia. I'm an
                international student at Clemson University pursuing a
                Bachelor's degree in Computer Engineering and a minor in
                Mathematical Sciences. I am a person who is passionate about
                learning and developing new software.In my free time, I enjoy
                learning new programming languages and working on my personal
                projects. I also love working out, watching sports, and spending
                time with my family and friends.
              </p>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

const profilePicsStyle = {
  borderRadius: "50%",
  width: "90%",
  height: "auto"
};

export default Home;
