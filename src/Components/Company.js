import React from "react";

function Company(props) {
  return (
    <div>
      <div className="row">
        <div className="col-2 align-self-end">
          <img
            className="image-fluid"
            width="100%"
            height="100%"
            src={props.logo}
            alt="Company Logo"
          ></img>
        </div>
        <div className="col-6 align-self-center">
          <h4 style={nameStyle}>{props.name}</h4>
        </div>
        <div className="col-4 align-self-center">
          <div className="text-right">
            <p>{props.date}</p>
          </div>
        </div>
      </div>
      <div className="row ml-3">
        <div className="col">
          <h5 style={titleStyle}>{props.title}</h5>
        </div>
        <div className="col">
          <div className="text-right">
            <h5>{props.location}</h5>
          </div>
        </div>
      </div>
      <div className="row ml-5">
        <ul>
          {props.descriptions.map((description, key) => {
            return <li>{description}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

const titleStyle = {
  fontStyle: "italic"
};

const nameStyle = {
  fontWeight: "bold"
};

// const logoStyle = {
//   width: "100px",
//   height: "100px"
// };

export default Company;
