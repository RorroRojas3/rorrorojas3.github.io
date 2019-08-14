import React from "react";
import HexawareLogo from "../Images/hexaware.jpg";
import MagnaLogo from "../Images/magna.png";
import FluorLogo from "../Images/fluor.jpg";

const Resume = () => {
  return (
    <div style={myContainer}>
      <h1 className="text-center">This is resume</h1>
      <img
        className="image-fluid"
        src={HexawareLogo}
        alt="HexawareLogo"
        style={logoStyle}
      />
      <img
        className="image-fluid"
        src={MagnaLogo}
        alt="MagnaLogo"
        style={logoStyle}
      />
      <img
        className="image-fluid"
        src={FluorLogo}
        alt="FluorLogo"
        style={logoStyle}
      />
      <div className="d-none">
        https://hexaware.com/wp-content/themes/hexaware-main/images/Brand/downloadbrand/color/logo.jpg
        http://seekvectorlogo.com/wp-content/uploads/2018/03/magna-international-vector-logo.png
        https://newsroom.fluor.com/sites/fluor.newshq.businesswire.com/files/logo/image/Fluor_logo.jpg
      </div>
    </div>
  );
};

const logoStyle = {
  width: "100px",
  height: "100xpx"
};

const myContainer = {
  maxWidth: "1450px",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto"
};

export default Resume;
