import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <div>{props.children}</div>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
