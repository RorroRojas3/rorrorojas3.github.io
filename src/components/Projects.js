// React components
import React, { Component } from "react";
import { slideInDown } from "react-animations";
import Radium, { StyleRoot } from "radium";

// My Components
import ProjectBox from "./ProjectBox";
import Loading from "./Loading";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: [],
      showLoading: true,
    };
  }

  // change
  async componentDidMount() {
    let url = "https://api.github.com/users/rorrorojas3/repos";
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ repositories: data, showLoading: false });
      })
      .catch(() => {
        this.setState({ showLoading: false });
      });
  }

  render() {
    return (
      <div>
        <div className="container-fluid h-100">
          {this.state.showLoading && (
            <div className="mt-4">
              <Loading></Loading>
            </div>
          )}
          {!this.state.showLoading && this.state.repositories.length === 0 && (
            <div className="container">
              <div className="row justify-content-center">
                <p>Error, could not fetch projects repositories from GitHub</p>
              </div>
            </div>
          )}
          {!this.state.showLoading &&
            this.state.repositories.length !== 0 &&
            this.state.repositories.map((repo, key) => (
              <StyleRoot>
                <div style={animations.slideInDown}>
                  <ProjectBox
                    name={repo.name}
                    url={repo.html_url}
                    description={repo.description}
                    language={repo.language}
                  />
                </div>
              </StyleRoot>
            ))}
        </div>
      </div>
    );
  }
}

const animations = {
  slideInDown: {
    animation: "x 3s",
    animationName: Radium.keyframes(slideInDown, "slideDown"),
  },
};

export default Projects;
