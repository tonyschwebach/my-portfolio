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
            src="https://placedog.net/300/300"
          />
          <p>
            I'm Tony Schwebach, a junior software engineer leveraging my
            corporate accounting and finance experience to build better business
            applications. I earned a certificate in full stack web development
            from the Georgia Institute of Technology to evolving my coding hobby
            into a career. I program using the MERN stack, SQL, and Python. I
            excel at working with internal and external partners at all levels
            of an organization.
          </p>

          <p>
            Prior to enrolling in the GT Bootcamp, I was an Accounting Director.
            I maintain my Certified Management Accountant license through the
            Institute of Management Accountants. I also have a Masters of
            Business Administration degree. In my accounting career, I
            taught myself SQL and Visual Basic to streamline processes and
            enhance analytics. I led accounting teams in operational
            accounting (Accounts Payable, Accounts Receivable, and Billing),
            general ledger, and analytics. More info regarding my professional
            career can be seen on{" "}
            <a target="_blank" href="https://www.linkedin.com/in/tonyschwebach">
              LinkedIn
            </a>
            .
          </p>
          <p>
            I enjoy physical activities like hiking with my dogs and lifting
            weights. I also enjoy playing board games with friends and creating
            Arduino projects.
          </p>
        </div>
      </div>
    </>
  );
};

export default Bio;
