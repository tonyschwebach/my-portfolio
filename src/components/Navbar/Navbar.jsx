import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Tony Schwebach
        </a>
        <a href="https://github.com/tonyschwebach" target="_blank" rel="noreferrer">
          <i className="fab fa-github nav-icon fa-lg"></i>
        </a>
        <a href="https://www.linkedin.com/in/tonyschwebach/" target="_blank" rel="noreferrer">
        <i className="fab fa-linkedin nav-icon fa-lg"></i>
        </a>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse text-right" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="./portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
