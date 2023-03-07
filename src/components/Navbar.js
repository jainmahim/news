import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export class Navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="d-flex justify-content-between">``
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <Link
            className="navbar-brand "
            style={{ color: "white" }}
            to="/general"
          >
            <span className="border border-white p-1">
              <strong>NewsZila</strong>
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link
                  className="nav-link active"
                  style={{ color: "white" }}
                  aria-current="page"
                  to="/general"
                >
                  
                  General
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="/business"
                  style={{ color: "white" }}
                >
                  {" "}
                  Busines{" "}
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="/entertainment"
                  style={{ color: "white" }}
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="/health"
                  style={{ color: "white" }}
                >
                  Health
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="/science"
                  style={{ color: "white" }}
                >
                  Science
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="/sports"
                  style={{ color: "white" }}
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item active">
                {" "}
                <Link
                  className="nav-link"
                  to="/technology"
                  style={{ color: "white" }}
                >
                  Technology
                </Link>
              </li>
            </ul>

            <div className="dropdown mx-3 float-right">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Country
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Link className="dropdown-item" to="/in">
                  India
                </Link>
                <Link className="dropdown-item" to="/us">
                  USA
                </Link>
                <Link className="dropdown-item" to="/ae">
                  UAE
                </Link>
                <Link className="dropdown-item" to="/cn">
                  China
                </Link>
                <Link className="dropdown-item" to="/ru">
                  Russia
                </Link>
                <Link className="dropdown-item" to="/jp">
                  Japan
                </Link>
                <Link className="dropdown-item" to="/fr">
                  France
                </Link>
                <Link className="dropdown-item" to="/au">
                  Australia
                </Link>
                <Link className="dropdown-item" to="/de">
                  Germany
                </Link>
                <Link className="dropdown-item" to="/hk">
                  Hong Kong
                </Link>
                <Link className="dropdown-item" to="/nz">
                  New Zealand
                </Link>
                <Link className="dropdown-item" to="/za">
                  South Africa
                </Link>
              </div>
            </div>
            <div>
              {/* <form className="form-inline d-flex justify-content-evenly">
                <input
                  className="form-control mx-1"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
