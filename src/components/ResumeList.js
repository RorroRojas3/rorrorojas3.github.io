// React Components
import React from "react";

function ResumeList(props) {
  return (
    <div className="row ml-5">
      <div className="col">
        <ul>
          {props.descriptions.map((description, key) => {
            return <li>{description}</li>;
          })}
        </ul>
      </div>
      <div className="col text-right">
        <ul style={dateStyle}>
          {props.dates.map((date, key) => {
            return (
              <li>
                <h5>{date}</h5>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const dateStyle = {
  listStyleType: "none"
};

export default ResumeList;
