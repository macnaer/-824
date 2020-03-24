import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

// Components
import Search from "../Seaerch/Search";

const Header = ({ onSearch }) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <NavLink className="navbar-brand" to="/">
            Contact List
          </NavLink>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav">
            <li>
              <NavLink to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/addcontact">Add contact</NavLink>
            </li>
          </ul>
          <Search onSearch={onSearch} />
        </div>
      </div>
    </nav>
  );
};
export default Header;
