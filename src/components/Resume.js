// React Components
import React from "react";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

// My Components
import Company from "./Company";
import Skills from "./Skills";

// Files
import resume from "../documents/Rodrigo-Rojas-Resume.pdf";

// Images
import HexawareLogo from "../images/hexaware.jpg";
import MagnaLogo from "../images/magna.png";
import FluorLogo from "../images/fluor.jpg";
import ClemsonLogo from "../images/clemson.jpg";

const Resume = () => {
  return (
    <StyleRoot>
      <div className="container mt-4" style={animations.fadeIn}>
        <div className="row">
          <h2>
            <strong>Experience</strong>
          </h2>
        </div>
        <Company
          logo={HexawareLogo}
          name="Hexaware Technologies"
          descriptions={hexawareInfo}
          title="Associate Software Engineer"
          location="Atlanta, GA"
          date="May 2019 - Present"
        ></Company>
        <hr />
        <Company
          logo={MagnaLogo}
          name="Magna International"
          descriptions={magnaInfo}
          title="Software Developer Intern"
          location="Carrollton, GA"
          date="February 2019 - May 2019"
        ></Company>
        <hr />
        <Company
          logo={FluorLogo}
          name="Fluor Corporation"
          descriptions={fluorInfo}
          title="Senior Project Support Intern"
          location="Greenville, SC"
          date="June 2017 - August 2017"
        ></Company>
        <hr />
        <h2 className="row">
          <strong>Education</strong>
        </h2>
        <div className="row">
          <div className="col-md-2 text-center">
            <img
              className="image-fluid"
              height="150px"
              width="150px"
              src={ClemsonLogo}
              alt="Clemson"
            />
          </div>
          <div className="col-md-10">
            <h3>Clemson University</h3>
            <h4>Bachelor's of Science in Computer Engineering</h4>
            <h5>Minor: Mathematical Sciences</h5>
          </div>
        </div>
        <hr />
        <div className="row">
          <h2>
            <strong>Technical Skills</strong>
          </h2>
        </div>
        <Skills title="Programming Languages" skills={programmingLangSkills} />
        <Skills title="Frameworks & Libraries" skills={frameworkSkills} />
        <Skills title="Programs & Tools" skills={programSkills} />
        <Skills title="Operating Systems" skills={opSkills} />
        <Skills title="Langauges" skills={languageSkills} />
        <div className="text-center mt-4">
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-info btn-lg" type="button">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </StyleRoot>
  );
};

const hexawareInfo = [
  "Designed and implemented REST APIs by utilizing C# with .NET Core framework and Entity Framework Core.",
  "Created and implemented database tables, views, and storage procedures into projects by utilizing SQL and Microsoft SQL Server.",
  "Developed user interface of website by utilizing React.js library, HTML5, CSS3, and Bootstrap 4 framework.",
  "Utilized Azure DevOps and Git for version control and revisions.",
  "Developed projects in an agile, test-driven environment.",
];

const magnaInfo = [
  "Designed and developed websites by utilizing C# with the .NET Framework, Entity Framework, and ASP.NET.",
  "Designed, created, maintained, and implemented database tables into projects by utilizing SQL and Microsoft SQL Server.",
  "Created user interface designs by utilizing HTML5, CSS3, and Bootstrap 4 framework.",
  "Scraped website information by utilizing a combination of JavaScript and jQuery library.",
  "Utilized Azure DevOps Services for version control of software.",
  "Maintained close communication with the IT team to enhance product quality.",
];

const fluorInfo = [
  "Developed software in C and PowerShell to automate tracking of engineering software license.",
  "Assisted in reducing software development cost to improve employee efficiency.",
  "Analyzed and updated engineering software metrics database using SQL.",
  "Managed daily operations of engineering software usage from 40 vendors.",
  "Created documentation for all developed software for current and future utilization.",
];

const opSkills = ["Windows", "Linux"];

const programSkills = [
  "Visual Studio IDE",
  "Visual Studio Code",
  "Git",
  "Azure DevOps",
  "Github",
  "Microsoft SQL Server",
  "Postman",
  "Microsoft Office",
];

const frameworkSkills = ["React.js", "Razor", "Bootstrap 4"];

const programmingLangSkills = [
  "C#",
  "Javascript",
  "SQL",
  "HTML5",
  "CSS3",
  "R",
  "MATLAB",
  "Powershell",
  "C++",
  "Java",
  "VHDL",
  "Assembly",
];

const languageSkills = ["English", "Spanish "];

const animations = {
  fadeIn: {
    animation: "x 2s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};

export default Resume;
