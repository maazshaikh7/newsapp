// import PropTypes from 'prop-types'
import React, { Component } from "react";
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  //   static propTypes = {}

  render() {
    return (
      <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark navbar-sticky">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsApp
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    News Category
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/">
                        General
                      </Link>
                      <hr className="dropdown-divider" />
                      <Link className="dropdown-item" to="/entertainment">
                        Entertainment
                      </Link>
                      <Link className="dropdown-item" to="/business">
                        Business
                      </Link>
                      <Link className="dropdown-item" to="/health">
                        Health
                      </Link>
                      <Link className="dropdown-item " to="/science">
                        Science
                      </Link>
                    </li>
                    <Link className="dropdown-item" to="/sports">
                      Sports
                    </Link>
                    <li>
                      <Link className="dropdown-item" to="/technology">
                        Technology
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
