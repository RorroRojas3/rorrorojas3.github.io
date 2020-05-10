import React from 'react';
import GithubLogo from '../Images/github.png'

const ProjectBox = (props) =>
{
    return(
        <div className="container mt-4">
            <div className="card">
                
                <div className="card-header">
                    <img className="mr-4" src={GithubLogo} style={logoStyle}alt="GitHubLogo"></img>
                    {props.name}
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>
                            {props.description}
                        </p>
                        <h6>Coding Language: <b>{props.language}</b></h6>
                        <h6>
                            <a href={props.url} rel="noopener noreferrer" target="_blank">{props.url}</a>
                        </h6>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}

const logoStyle = {
    width: "30px",
    height: "30px"
}

export default ProjectBox;