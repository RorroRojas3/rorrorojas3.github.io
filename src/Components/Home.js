import React from 'react';
import ProfilePicture from '../Images/profileHome.jpg'
import '../App.css'

const Home = () => {
    return(
        <div className="container">
            <h1 className="d-flex justify-content-center mb-4 mt-4">Welcome!</h1>
            <div className="row d-flex justify-content-center">
                <div className="col-lg align-self-center">
                    <img src={ProfilePicture} className="img-fluid mb-4" style={profilePicsStyle} alt="Pic"></img>
                </div>
                <div className="col-lg align-self-center">
                    <p>
                        Hello, my name is Rodrigo Ignacio Rojas Garcia. I'm an international student at Clemson University 
                        pursuing a Bachelor's degree in Computer Engineering and a minor in Mathematical Sciences. 
                        I am a person who is passionate about learning and developing new software.In my free time, I enjoy 
                        learning new programming languages and working on my personal projects. I also love working out, watching 
                        sports, and spending time with my family and friends. 
                    </p>
                </div>
            </div>
        </div>
    );
    
}

const profilePicsStyle = {
    borderRadius: "50%",
    width: "60%",
    height: "auto"
}

export default Home;