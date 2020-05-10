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
          <p>{props.title}</p>
          <p>{props.name}</p>
          <p>{props.location}</p>
          <p>{props.date}</p>
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
