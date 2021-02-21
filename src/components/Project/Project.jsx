import React from "react";
import "./Project.css"

const Project = (props) => {
  let image = require("../../assets/img/"+props.imageURL)
  console.log(image)
  return (
    <div className="row mt-5 justify-content-between">
      <div className="col-lg-2">
      <a href={props.deployedURL}><img
          className="project-image"
          alt="project pic"
          src={image.default}
        /></a>
      </div>
      <div className="col-lg-8 project-card ">
        <h2 ><a className="project-title" href={props.deployedURL}>{props.title}</a></h2>
        <p className="text-left">{props.description}</p>
        <p className="text-left">
          <span>Technologies Used:</span> {props.technologiesUsed.join(", ")}
        </p>
        <a href={props.deployedURL}>
          <button type="button" className="btn btn-info mb-2">
            Deployed App
          </button>
        </a>
        <a href={props.githubRepoURL}>
          <button type="button" className="btn btn-secondary mb-2">
            GitHub Repo
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project;
