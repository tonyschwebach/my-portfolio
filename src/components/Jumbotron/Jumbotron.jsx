import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => {
  return (
    <div id="jumbotron" className="container">
      <div className="row ">
        <div className="col">
          <h1>Software Engineer with Business Background</h1>
              <h6>
                MERN Stack | Georgia Tech Coding Bootcamp | MBA | Certified
                Management Accountant
              </h6>
          <div className="row justify-content-center">
            <div className="col-10">
              <h5>
                I'm Tony Schwebach, a junior software engineer leveraging my
                corporate accounting and finance experience to build better
                business applications.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col">
          <a href="/portfolio">
            <button type="button" className="btn btn-info">
              My Portfolio
            </button>
          </a>
          <a href="/contact">
            <button type="button" className="btn btn-secondary">
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
