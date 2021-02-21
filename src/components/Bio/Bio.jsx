import React from "react";
import "./Bio.css";
import headshot from "../../assets/img/headshot.jpg";

const Bio = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col">
          <h1>Tony Schwebach</h1>
        </div>
      </div>
      <div className="row mt-3 justify-content-around">
        <div className="col-md-3">
          <img id="headshot" alt="Tony Schwebach professional" src={headshot} />
        </div>
        <div className="col-md-8 px-4">
          <p>
            I'm Tony Schwebach, a junior software engineer leveraging my
            corporate accounting and finance experience to build better business
            applications. I earned a certificate in full stack web development
            from the Georgia Institute of Technology to evolve my coding hobby
            into a career. I program using the MERN stack, SQL, and Python. I
            excel at working with internal and external partners at all levels
            of an organization.
          </p>

          <p>
            Prior to enrolling in the GT Bootcamp, I was an Accounting Director.
            I maintain my Certified Management Accountant license through the
            Institute of Management Accountants. I also have a Masters of
            Business Administration degree. In my accounting career, I taught
            myself SQL and Visual Basic to streamline processes and enhance
            analytics. I led teams in analytics, treasury, operational
            accounting, and general ledger. More info regarding my professional
            career can be seen on{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/tonyschwebach"
            >
              LinkedIn
            </a>
            .
          </p>
          <p>
            I hiking with my wife and dogs and lifting weights. I also enjoy
            playing board games with friends and creating Arduino projects.
          </p>
        </div>
      </div>
    </>
  );
};

export default Bio;
