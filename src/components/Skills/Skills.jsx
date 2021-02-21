import React from "react";
import skills from "../../assets/skills.json"

const Skills = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <h1>Skills</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {/* for each skill, make an icon  */}
          <div>
            <i class="fab fa-js"></i>
            <p>JavaScript</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
