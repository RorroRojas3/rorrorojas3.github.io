// React Components
import React from "react";

function ResumeList(props) {
  return (
    <div className="row ml-5">
      <ul>
        {props.descriptions.map((description, key) => {
          return <li>{description}</li>;
        })}
      </ul>
    </div>
  );
}

export default ResumeList;
