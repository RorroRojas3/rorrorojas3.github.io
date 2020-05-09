// React components
import React, { Component } from "react";

// My Components
import ProjectBox from "./ProjectBox";
import Navbar from "./Navbar";
import Footer from "./Footer";
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
        <Navbar />
        <div className="container-fluid h-100">
          {this.state.showLoading && (
            <div className="mt-2">
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
              <ProjectBox
                name={repo.name}
                url={repo.html_url}
                description={repo.description}
                language={repo.language}
              />
            ))}
          <div className="container">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
