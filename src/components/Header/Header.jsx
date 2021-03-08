import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import "./Header.css";

const Navbar = () => {
  return (
    <header className="mb-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Router>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Tony Schwebach
            </Link>
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
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/portfolio">
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
            </div>
          </div>
        </Router>
      </nav>
    </header>
  );
};

export default Navbar;
