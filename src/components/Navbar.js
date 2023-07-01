import React, { Component } from "react";
import { Link } from "react-router-dom";
const myStyle = {
  color: "#DADBDD",
  textDecoration: "none",
  fontFamily: "Italic",
  margin: "5px",
};
export class Navbar extends Component {
  render() {
    return (
      <>
        {/* <i class="fa fa-car fa-5x"></i> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Navbar
            </Link>
            {/* <i class="fa fa-car fa-5x"></i> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <i className="fa fa-bar"></i> */}
              <span className="navbar-toggler-icon"></span>
              {/* <i class="fa fa-bar"></i> */}
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" style={myStyle}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/business" style={myStyle}>
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/entertainment" style={myStyle}>
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/health" style={myStyle}>
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/sports" style={myStyle}>
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/technology" style={myStyle}>
                    Technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/science" style={myStyle}>
                    Science
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
