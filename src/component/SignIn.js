import React, { Component } from "react";
//import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Post from "./Post";
import {loginUser} from "../actions/actionFunc";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.change = this.change.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  change(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleClick(e) {
    e.preventDefault();
    const user ={
      email: this.state.email,
      password: this.state.password
    }
    loginUser(user);
    if (!this.props.error) this.props.history.push("/Post");
  }
  render() {
    if (!this.props.users) {
      return (
        <div className="card  bg-transparent">
          <form className="card-body" onSubmit={e => this.handleClick(e)}>
            {this.props.error ? (
              <div className="alert alert-danger">{this.props.error}</div>
            ) : null}
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={this.change}
                placeholder={this.state.email}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.change}
                placeholder={this.state.password1}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
            <Link to="/SignUp"> Not Registered?</Link>
          </form>
        </div>
      );
    } else {
      return <Post />;
    }
  }
}

// const mapStateToProps = state => {
//   return {
//     error: state.users.error
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     loginUser: user => dispatch({ type: "LOGIN_USER", payload: user })
//   };
// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SignIn);
