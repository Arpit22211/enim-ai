import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const navbarButton = useRef(null);

  return (
    <div className="full">
      <nav
        id="navb"
        className="navbar fix navbar-expand-lg navbar-light shadow-sm"
      >
        <Link className="navbar-brand brand" to="/">
          Enim-AI
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={() => {
            setIsNavCollapsed(false);
          }}
          ref={navbarButton}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarText"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link
                className="nav-link"
                to="/"
                onClick={() => {
                  if (window.innerWidth < 992) {
                    navbarButton.current.click();
                  }
                }}
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => {
                  if (window.innerWidth < 992) {
                    navbarButton.current.click();
                  }
                }}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => {
                  if (window.innerWidth < 992) {
                    navbarButton.current.click();
                  }
                }}
              >
                Why Enim-AI
              </Link>
            </li>

            <li className="nav-item">
              <a
                className="nav-link "
                href="#contactMe"
                onClick={() => {
                  if (window.innerWidth < 992) {
                    navbarButton.current.click();
                  }
                }}
              >
                Contact
              </a>
            </li>
          </ul>
          <span className="navbar-text">
            {" "}
            <Link className=" btn btn-primary p-1 LinkButton1" to="/">
              Login
            </Link>
            {"       "}
            <Link className=" btn btn-primary p-1 LinkButton2" to="/">
              Signup
            </Link>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
