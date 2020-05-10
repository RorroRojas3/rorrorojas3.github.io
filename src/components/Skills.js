import React from "react";

const Skills = (props) => {
  return (
    <div className="row">
      <div className="col-md-2">
        <p>{props.title}</p>
      </div>
      <div className="col-md-10">
        <ul>
          {props.skills.map((skill, key) => {
            return <li style={{ display: "inline" }}>&bull; {skill}&emsp;</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
