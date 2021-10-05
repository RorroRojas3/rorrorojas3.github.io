import React from "react";
import { Link } from "react-router-dom";
import FacebookLogo from "../images/facebook.png";
import LinkedInLogo from "../images/linkedin.png";
import InstagramLogo from "../images/instagram.png";
import GithubLogo from "../images/github.png";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        RRG
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav mr-auto">
          <li
            className="nav-item"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <Link className="nav-link" to="/resume">
              Resume
            </Link>
          </li>
          <li
            className="nav-item"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
          </li>
          <li
            className="nav-item"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <Link className="nav-link" to="/about">
              Contact
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item d-none d-lg-block mr-2">
            <a
              href="https://github.com/rorrorojas3"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img style={imageStyle} src={GithubLogo} alt="Github"></img>
              <div className="d-none">
                Icons made by{" "}
                <a
                  href="https://www.flaticon.com/authors/dave-gandy"
                  title="Dave Gandy"
                >
                  Dave Gandy
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>{" "}
                is licensed by{" "}
                <a
                  href="http://creativecommons.org/licenses/by/3.0/"
                  title="Creative Commons BY 3.0"
                >
                  CC 3.0 BY
                </a>
              </div>
            </a>
          </li>
          <li className="nav-item d-lg-none">
            <a
              className="nav-link"
              href="https://github.com/rorrorojas3"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li className="nav-item d-none d-lg-block mr-2">
            <a
              href="https://www.linkedin.com/in/rodrigorojasgarcia/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img style={imageStyle} src={LinkedInLogo} alt="LinkedIn"></img>
              <div className="d-none">
                Icons made by{" "}
                <a
                  href="https://www.flaticon.com/authors/freepik"
                  title="Freepik"
                >
                  Freepik
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>{" "}
                is licensed by{" "}
                <a
                  href="http://creativecommons.org/licenses/by/3.0/"
                  title="Creative Commons BY 3.0"
                >
                  CC 3.0 BY
                </a>
              </div>
            </a>
          </li>
          <li className="nav-item d-lg-none">
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/rodrigorojasgarcia/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li className="nav-item d-none d-lg-block mr-2">
            <a
              href="https://www.facebook.com/rorrorojas3"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img style={imageStyle} src={FacebookLogo} alt="Facebook"></img>
              <div className="d-none">
                Icons made by{" "}
                <a
                  href="https://www.flaticon.com/authors/freepik"
                  title="Freepik"
                >
                  Freepik
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>{" "}
                is licensed by{" "}
                <a
                  href="http://creativecommons.org/licenses/by/3.0/"
                  title="Creative Commons BY 3.0"
                >
                  CC 3.0 BY
                </a>
              </div>
            </a>
          </li>
          <li className="nav-item d-lg-none">
            <a
              className="nav-link"
              href="https://www.facebook.com/rorrorojas3"
              rel="noopener noreferrer"
              target="_blank"
            >
              Facebook
            </a>
          </li>
          <li className="nav-item d-none d-lg-block mr-2">
            <a
              href="https://www.instagram.com/rodrigorojasg_"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img style={imageStyle} src={InstagramLogo} alt="Instagram"></img>
              <div className="d-none">
                Icons made by{" "}
                <a
                  href="https://www.flaticon.com/authors/freepik"
                  title="Freepik"
                >
                  Freepik
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>{" "}
                is licensed by{" "}
                <a
                  href="http://creativecommons.org/licenses/by/3.0/"
                  title="Creative Commons BY 3.0"
                >
                  CC 3.0 BY
                </a>
              </div>
            </a>
          </li>
          <li className="nav-item d-lg-none">
            <a
              className="nav-link"
              href="https://www.instagram.com/rodrigorojasg_"
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const imageStyle = {
  width: "30px",
  height: "30px",
};

export default Nav;
