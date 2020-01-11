// React Components
import React from "react";

function ResumeList(props) {
  return (
    <div className="row ml-5">
      <div className="col-md">
        <ul>
          {props.descriptions.map((description, key) => {
            return <li>{description}</li>;
          })}
        </ul>
      </div>
      <div className="col-md text-right">
        {props.dates.map((date, key) => {
          return <p>"caca"</p>;
        })}
      </div>
    </div>
  );
}

export default ResumeList;
