// React Components
import React from "react";

// My Components
import Navbar from "./Navbar";
import Company from "./Company";

// Images
import HexawareLogo from "../Images/hexaware.jpg";
import MagnaLogo from "../Images/magna.png";
import FluorLogo from "../Images/fluor.jpg";
import EYLogo from "../Images/ey.png";

//
const hexawareInfo = [
  "Designed and implemented REST APIs by utilizing C# with .NET Core framework and Entity Framework Core.",
  "Created and implemented database tables, views, and storage procedures into projects by utilizing SQL and Microsoft SQL Server.",
  "Developed user interface of website by utilizing React.js library, HTML5, CSS3, and Bootstrap 4 framework.",
  "Utilized Azure DevOps and Git for version control and revisions.",
  "Developed projects in an agile, test-driven environment."
];

const magnaInfo = [
  "Designed and developed websites by utilizing C# with the .NET Framework, Entity Framework, and ASP.NET.",
  "Designed, created, maintained, and implemented database tables into projects by utilizing SQL and Microsoft SQL Server.",
  "Created user interface designs by utilizing HTML5, CSS3, and Bootstrap 4 framework.",
  "Scraped website information by utilizing a combination of JavaScript and jQuery library.",
  "Utilized Azure DevOps Services for version control of software.",
  "Maintained close communication with the IT team to enhance product quality."
];

const fluorInfo = [
  "Developed software in C and PowerShell to automate tracking of engineering software license.",
  "Assisted in reducing software development cost to improve employee efficiency.",
  "Analyzed and updated engineering software metrics database using SQL.",
  "Managed daily operations of engineering software usage from 40 vendors.",
  "Created documentation for all developed software for current and future utilization."
];

const Resume = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mt-4">
        <Company
          logo={HexawareLogo}
          name="Hexaware Technologies"
          descriptions={hexawareInfo}
        ></Company>
        <Company
          logo={MagnaLogo}
          name="Magna International"
          descriptions={magnaInfo}
        ></Company>
        <Company
          logo={FluorLogo}
          name="Fluor Corporation"
          descriptions={fluorInfo}
        ></Company>
        {/* <div className="d-none">
          https://hexaware.com/wp-content/themes/hexaware-main/images/Brand/downloadbrand/color/logo.jpg
          http://seekvectorlogo.com/wp-content/uploads/2018/03/magna-international-vector-logo.png
          https://newsroom.fluor.com/sites/fluor.newshq.businesswire.com/files/logo/image/Fluor_logo.jpg
          https://worldvectorlogo.com/logo/ernst-young-ey
        </div> */}
      </div>
    </div>
  );
};

const eyStyle = {
  width: "30px",
  height: "30px"
};

export default Resume;
