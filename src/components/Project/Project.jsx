import React from "react";
import "./Project.css";

const Project = (props) => {
  let image = require("../../assets/img/" + props.imageURL);
  return (
    <div className="row mt-5 justify-content-between">
      <div className="col-lg-2 text-center mb-2">
        <a href={props.deployedURL} target="_blank" rel="noreferrer">
          <img
            className="project-image"
            alt="project pic"
            src={image.default}
          />
        </a>
      </div>
      <div className="col-lg-8 project-card ">
        <h2>
          <a
            className="project-title"
            href={props.deployedURL}
            target="_blank"
            rel="noreferrer"
          >
            {props.title}
          </a>
        </h2>
        <p className="text-left">{props.description}</p>
        <p className="text-left">
          <span>Technologies Used:</span> {props.technologiesUsed.join(", ")}
        </p>
        <div className="mt-auto mb-2">
          <a href={props.deployedURL} target="_blank" rel="noreferrer">
            <button type="button" className="btn btn-primary mb-2">
              Deployed App
            </button>
          </a>
          <a href={props.githubRepoURL} target="_blank" rel="noreferrer">
            <button type="button" className="btn btn-light mb-2">
              GitHub Repo
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
