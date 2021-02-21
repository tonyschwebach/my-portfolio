import React from "react";
import "./ContactInfo.css"

const ContactInfo = () => {
  return (
    // <div className="row justify-content-center">
      <div className="col-md-6">
        <h2 className="px-4 pt-3 pb-3">Let's Connect!</h2>
        <h6 className="px-4 pt-3 pb-3 contact-info">
          <i className="far fa-envelope"></i> Email me at{" "}
          <a href="mailto: tony.schwebach.developer@gmail.com">
            tony.schwebach.developer@gmail.com
          </a>
        </h6>
        {/* <!-- leaving personal phone number off public website
        <h6 className="px-4 pb-4">
          <i className="fas fa-phone-alt"></i> Call me at
          <a href="tel: 6055954594">(605) 595-4594</a>.
        </h6> --> */}

        <h6 className="px-4 pb-3 contact-info">
          <i className="fab fa-linkedin"></i> Connect on{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/tonyschwebach/"
          >
            LinkedIn
          </a>
        </h6>

        <h6 className="px-4 pb-3 contact-info">
          <i className="fab fa-github-square"></i> Follow me on{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/tonyschwebach"
          >
            GitHub
          </a>
        </h6>
      </div>
    // </div>
  );
};

export default ContactInfo;
