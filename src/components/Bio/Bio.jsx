import React from "react";

const Bio = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <h1>About Me</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img
            alt="Tony Schwebach professional"
            src="https://placedog.net/300/ 300"
          />
          <p>
            Tony Schwebach is a junior software engineer leveraging his
            corporate accounting and finance experience to build better business
            tools. He is evolving his coding hobby into a career and earning a
            certificate in full stack web development from the Georgia Institute
            of Technology to pursue his passion for technology and lifelong
            learning. He utilizes the MERN stack, jQuery.js, SQL, and Python.
            Tony was recognized as employee of the quarter for his collaborative
            leadership, problem solving, and analytical work to automate
            processes enabling significant growth with limited additional
            resources. He excels at working with internal and external partners
            and is eager to build value-adding tools leveraging his experience
            as a business professional and passion for programming.
          </p>

          <p>
            Prior to enrolling in the GT Bootcamp, Tony was an Accounting
            Director. He is a Certified Management Accountant and maintains his
            license through the Institute of Management Accountants. He also
            earned a Masters of Business Administration degree. In his
            accounting career, Tony taught himself SQL and Visual Basic to
            streamline processes and enhance analytics. Tony led accounting
            teams in operational accounting (Accounts Payable, Accounts
            Receivable, and Billing), general ledger, and analytics. He excels
            at collaborating cross-functionally to add value to organizations
            and coaching team members to grow their skills. More info regarding
            his professional career can be seen on{" "}
            <a target="_blank" href="https://www.linkedin.com/in/tonyschwebach">
              LinkedIn
            </a>
            .
          </p>
          <p>
            In his personal life, Tony is married and has two dogs named Kip and
            Taz. Both are rescues. Tony enjoys physical activities like hiking
            and lifting weights. He also enjoys playing board games with his
            friends and creating Arduino projects. Tony likes to cook and
            barbecue.
          </p>
        </div>
      </div>
    </>
  );
};

export default Bio;
