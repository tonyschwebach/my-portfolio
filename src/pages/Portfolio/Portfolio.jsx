import React from "react";
import Project from "../../components/Project/Project";
import projects from "../../assets/projects.json";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Portfolio = () => {
  return (
    <>
      <div id="portfolio-page" className="content-page">
        <Navbar />
        <div className="container">
          <div className="row mt-5">
            <div className="col text-center">
              <h1>Portfolio</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {projects.map((project, index) => (
                <Project {...project} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
