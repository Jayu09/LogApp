import React, { Component } from "react";
import { connect } from "react-redux";
import proptypes from "prop-types";
import { loginUser } from "../actions/UserAction";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "email@example.com",
      password: "password"
    };
    this.change = this.change.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  change(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async handleClick(e) {
    e.preventDefault();
    await this.props.loginUser(this.state);
    if (!this.props.error) {
      this.props.history.push("/Post");
    }
  }
  render() {
    return (
      <div className="input-group mb-3">
        <form className="px-4 py-3" onSubmit={e => this.handleClick(e)}>
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
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.users.error
  };
};

SignIn.proptypes = {
  loginUser: proptypes.func.isRequired
};
export default connect(
  mapStateToProps,
  { loginUser }
)(SignIn);
