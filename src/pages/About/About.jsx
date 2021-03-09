import React from "react";
import Bio from "../../components/Bio/Bio";
import Skills from "../../components/Skills/Skills";
import resume from "../../assets/resume.pdf";
import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <>
      <div id="about-page" className="content-page">
        <Navbar />
        <div className="container ,mx-3">
          <Bio />
          <div className="row mt-3 justify-content-center">
            <div className="col-md-3 text-center">
              <h2 className="mt-3">Resume</h2>
              <a href={resume}>
                <p className="text-center mb-0">
                  <i className="fas fa-file fa-4x skills-icon"></i>
                </p>
              </a>
              <p className="text-center mb-5">Resume</p>
            </div>
            <div className="col-md-7 px-4">
              <Skills />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
