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
