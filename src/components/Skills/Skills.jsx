import React from "react";
import skills from "../../assets/skills.json";
import "./Skills.css"

const Skills = () => {
  return (
    <>
      <div className="row mt-3">
        <div className="col text-center">
          <h2>Skills</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        
        
          {/* for each skill, make an icon  */}
          {skills.map((skill)=>(
          <div className=" col-lg-2 col-md-3 col-4 justify-content-center" key={skill.skill}>
            <p className="text-center mb-0"><i className={`${skill.fontAwesomeIconClass}`}></i></p>
            <p className="text-center">{skill.skill}</p>
          </div>))
          }
      
    
      </div>
    </>
  );
};

export default Skills;
