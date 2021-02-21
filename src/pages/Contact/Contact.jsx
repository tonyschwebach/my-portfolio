import React from "react";

const Contact = () => {
  return (
    <div className="container">

      <div class="row">
        <div class="col-12">
          <h1>Contact</h1>
        </div>
        <ul class="list-unstyled">
          <h6 class="px-4 pt-3 pb-3 text-wrap">
            <i class="far fa-envelope"></i> Email me at{" "}
            <a href="mailto: tony.schwebach.developer@gmail.com">
              tony.schwebach.developer@gmail.com
            </a>
          </h6>
          {/* <!-- leaving personal phone number off public website
              <h6 class="px-4 pb-4">
                <i class="fas fa-phone-alt"></i> Call me at
                <a href="tel: 6055954594">(605) 595-4594</a>.
              </h6> --> */}

          <h6 class="px-4 pb-3">
            <i class="fab fa-linkedin"></i> Connect on{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/tonyschwebach/"
            >
              LinkedIn
            </a>
          </h6>

          <h6 class="px-4 pb-3">
            <i class="fab fa-github-square"></i> Follow me on{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/tonyschwebach"
            >
              GitHub
            </a>
          </h6>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
