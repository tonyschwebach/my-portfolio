import React from "react";

const Jumbotron = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Attention Getter</h1>
          <hr></hr>
          <h3>
            I'm Tony Schwebach. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloribus, porro! Voluptas, reprehenderit delectus
            exercitationem natus atque consequuntur nisi.
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <a href="/portfolio">
            <button type="button" class="btn btn-primary">
              Portfolio
            </button>
          </a>
          <a href="/contact">
            <button type="button" class="btn btn-secondary">
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
