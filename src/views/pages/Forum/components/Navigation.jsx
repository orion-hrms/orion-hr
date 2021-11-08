import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            React Forum Demo for OrionHR
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  HOME
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/add" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/add">
                  Add
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/list" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/list">
                LIST
                </Link>
              </li>
              
              <li
                class={`nav-item  ${
                  props.location.pathname === "/manage" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/manage">
                  MANAGE
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/test" ? "active" : ""
                }`}
              >
               
              </li>

              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);