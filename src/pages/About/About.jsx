import React from "react";
import Bio from "../../components/Bio/Bio";
import Skills from "../../components/Skills/Skills";
import "./About.css"

const About = () => {
  return (
    <div className="container">
      <Bio />
      <Skills />
    </div>
  );
};

export default About;
