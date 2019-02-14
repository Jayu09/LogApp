import React, { Component } from "react";
import Post from "./component/Post";
import PostForm from "./component/PostForm";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: ""
    };
  }
  signout = async e => {
    await this.props.signOut();
  };
  render() {
    return (
      <Router className="bg-transparent ">
        <div className="bg-transparent">
          <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <Link className="navbar-brand" to="/">
              LOG APP
            </Link>
            <div className="collapse navbar-collapse bg-transparent">
              {this.props.valid ? (
                <div className="collapse navbar-collapse bg-transparent">
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
                      <Link
                        className="nav-link"
                        onClick={this.signout}
                        to="/SignIn"
                      >
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
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
              )}
            </div>
          </nav>
          <h1>LogApp</h1>
          <div className="container bg-transparent ">
            <Route path="/Post" component={Post} />
            <Route path="/AddPost" component={PostForm} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/SignIn" component={SignIn} />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    valid: state.users.valid
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch({ type: "LOG_OUT" })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
