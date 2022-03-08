import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Jumbotron.css";

const Jumbotron = () => {
  return (
    <div id="jumbotron" className="container text-center">
      <div className="row justify-content-center">
        <div className="col-lg-10 ">
          <h1 className="attention-getter">Software Engineer with Business Background</h1>
              <h5 className="mt-2 mb-4">
                MERN Stack | Georgia Tech Coding Bootcamp | MBA | Certified
                Management Accountant
              </h5>
          <div className="row justify-content-center pt-5 pb-4">
            <div className="col">
              <h3 >
                I'm Tony Schwebach, a software engineer leveraging my
                corporate accounting and finance experience to build better
                business applications.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {/* <Router > */}


        <div className="col">
          <Link to="/portfolio">
            <button type="button" className="btn btn-primary">
              My Portfolio
            </button>
          </Link>
          <Link to="/contact">
            <button type="button" className="btn btn-light">
              Contact Me
            </button>
          </Link>
        </div>

        {/* </Router> */}
      </div>
    </div>
  );
};

export default Jumbotron;
