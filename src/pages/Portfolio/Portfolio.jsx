import React from "react";
import Project from "../../components/Project/Project";
import projects from "../../assets/projects.json"

const Portfolio = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h1>Portfolio</h1>
        </div>
      </div>
      {projects.map((project,index)=><Project {...project} key={index} />)}
      
      
    </div>
  );
};

export default Portfolio;
