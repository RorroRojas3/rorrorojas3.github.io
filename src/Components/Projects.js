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
    };
  }

  // change
  async componentDidMount() {
    let url = "https://api.github.com/users/rorrorojas3/repos";
    let apiData = await fetch(url);
    let repositories = await apiData.json();
    this.setState({
      repositories: repositories,
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid h-100">
          {this.state.repositories.length === 0 && <Loading></Loading>}
          {this.state.repositories.map((repo, key) => (
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
