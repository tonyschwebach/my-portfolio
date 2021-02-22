import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Tony Schwebach
        </a>
        <a
          href="https://github.com/tonyschwebach"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github nav-icon fa-lg"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/tonyschwebach/"
          target="_blank"
          rel="noreferrer"
        >
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
          <Router>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link  className="nav-link" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </Router>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
