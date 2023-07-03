import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Navbar extends Component {
  render() {
    return (
      <>
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "rgba(0.1,0.2,1,0.6)", color: "white" }}
        >
          <div className="container-fluid">
            <Link
              className="navbar-brand"
              to="/"
              style={{
                fontSize: "1.5rem",
                fontFamily: "italic",
                color: "white",
              }}
            >
              News World
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ color: "grey", backgroundColor: "white" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link text-light " to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light " to="/Aboutus">
                    About us
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-light"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Category
                  </Link>
                  <ul
                    className="dropdown-menu"
                    style={{
                      backgroundColor: "rgba(0,0,0.7,0.5)",
                      color: "white",
                    }}
                  >
                    <li>
                      <Link className="dropdown-item text-light" to="/arts">
                        Arts
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-light"
                        to="/automobiles"
                      >
                        Automobiles
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-light" to="/books">
                        Books
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-light" to="/business">
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-light" to="/fashion">
                        Fashion
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-light" to="/food">
                        Food
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-light" to="/health">
                        Health
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-light" to="/insider">
                        Insider
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-light" to="/magazine">
                        Magazine
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-light" to="/movies">
                        Movies
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-light" to="/politics">
                        Politics
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-light"
                        to="/realestate"
                      >
                        Real Estate
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-light" to="/sports">
                        Sports
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-light"
                        to="/technology"
                      >
                        Technology
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-light" to="/theater">
                        Theater
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-light" to="/travel">
                        Travel
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-light" to="/world">
                        world
                      </Link>
                    </li>
                  </ul>
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
