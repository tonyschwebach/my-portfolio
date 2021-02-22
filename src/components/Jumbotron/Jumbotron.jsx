import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import "./Jumbotron.css";

const Jumbotron = () => {
  return (
    <div id="jumbotron" className="container">
      <div className="row ">
        <div className="col">
          <h1>Software Engineer with Business Background</h1>
              <h5>
                MERN Stack | Georgia Tech Coding Bootcamp | MBA | Certified
                Management Accountant
              </h5>
          <div className="row justify-content-center">
            <div className="col-10">
              <h4>
                I'm Tony Schwebach, a junior software engineer leveraging my
                corporate accounting and finance experience to build better
                business applications.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <Router >


        <div className="col">
          <Link to="/portfolio">
            <button type="button" className="btn btn-info">
              My Portfolio
            </button>
          </Link>
          <Link to="/contact">
            <button type="button" className="btn btn-secondary">
              Contact Me
            </button>
          </Link>
        </div>

        </Router>
      </div>
    </div>
  );
};

export default Jumbotron;
