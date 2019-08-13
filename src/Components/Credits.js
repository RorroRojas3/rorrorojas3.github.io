import React from 'react'
import FacebookLogo from '../Images/facebook.png'
import LinkedInLogo from '../Images/linkedin.png'
import InstagramLogo from '../Images/instagram.png'
import GithubLogo from '../Images/github.png'


const Credits = () =>
{
    return(
        <div className="container mt-4">
            <div className="row pb-2">
                <div className="col-md-6">
                    <div className="card">
                        <img className="img-fluid mx-auto mt-2" src={GithubLogo} style={imageStyle} alt="GithubLogo"></img>
                        <div className="card-body">
                            <h5 className="card-title">GithubLogo Logo</h5>
                            <p className="card-text">
                                Made By: 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <img className="img-fluid mx-auto mt-2" src={LinkedInLogo} style={imageStyle} alt="LinkedInLogo"></img>
                        <div className="card-body">
                            <h5 className="card-title">LinkedIn Logo</h5>
                            <p className="card-text">
                                Made By: 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <img className="img-fluid mx-auto mt-2" src={FacebookLogo} style={imageStyle} alt="FacebookLogo"></img>
                        <div className="card-body">
                            <h5 className="card-title">Facebook Logo</h5>
                            <p className="card-text">
                                Made By: 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <img className="img-fluid mx-auto mt-2" src={InstagramLogo} style={imageStyle} alt="InstagramLogo"></img>
                        <div className="card-body">
                            <h5 className="card-title">Facebook Logo</h5>
                            <p className="card-text">
                                Made By: 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const imageStyle = {
    width: "150px",
    height: "150px"
}

export default Credits;