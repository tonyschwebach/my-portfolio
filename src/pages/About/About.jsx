import React from "react";
import Bio from "../../components/Bio/Bio";
import Skills from "../../components/Skills/Skills";
import resume from "../../assets/resume.pdf";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <Bio />
      <div className="row mt-3 justify-content-around">
        <div className="col-md-3">
          <h2 className="mt-3">Resume</h2>
          <a href={resume}>
            <i className="fas fa-file fa-4x skills-icon"></i>
          </a>
          <p className="text-center mb-5">Resume</p>
        </div>
        <div className="col-md-8 px-4">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;