import React from "react";

const Company = (props) => {
  return (
    <div>
      <div className="row mt-2">
        <div className="col-md-2 text-center">
          <img
            className="image-fluid"
            height="150px"
            width="150px"
            src={props.logo}
            alt="Company Logo"
          />
        </div>
        <div className="col-md-10">
          <h3>{props.name}</h3>
          <h4>
            <em>{props.title}</em>
          </h4>
          <h5>{props.location}</h5>
          <h5>{props.date}</h5>
          <ul>
            {props.descriptions.map((description, key) => {
              return <li>{description}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Company;
