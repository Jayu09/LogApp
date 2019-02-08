import React, { Component } from "react";
class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand">LOG APP</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-items">
              <Link className="nav-link" to="/AddPost">
                ADD POST
              </Link>
            </li>
            <li className="nav-items">
              <Link className="nav-link" to="/Post">
                VIEW POST
              </Link>
            </li>
          </ul>
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-items">
              <Link className="nav-link" to="/SignUp">
                Sign Up
              </Link>
            </li>
            <li className="nav-items">
              <Link className="nav-link" to="/SignIn">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
