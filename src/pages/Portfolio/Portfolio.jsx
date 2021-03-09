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
            <div className="col">
              <h1>Portfolio</h1>
            </div>
          </div>
          {projects.map((project, index) => (
            <Project {...project} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
