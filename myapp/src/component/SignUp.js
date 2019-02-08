import React, { Component } from "react";
import { connect } from "react-redux";
import proptypes from "prop-types";
import { addUser } from "../actions/UserAction";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "name",
      email: "email@example.com",
      password1: "password",
      password2: "verify password"
    };

    this.change = this.change.bind(this);
  }
  change(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick =async e => {
    e.preventDefault();
    await this.props.addUser(this.state);
    this.props.history.push("/Post");
  };
  render() {
    return (
      <div className="input-group mb-3">
        <form className="px-4 py-3" onSubmit={e => this.handleClick(e)}>
          <div className="form-group">
            {this.props.error ? (
              <div className="alert alert-danger">{this.props.error}</div>
            ) : null}
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.change}
              placeholder={this.state.name}
            />
          </div>
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
              name="password1"
              onChange={this.change}
              placeholder={this.state.password1}
            />
          </div>
          <div className="form-group">
            <label>Re-Enter Password</label>
            <input
              type="password"
              className="form-control"
              name="password2"
              onChange={this.change}
              placeholder={this.state.password2}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
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

SignUp.proptypes = {
  addUser: proptypes.func.isRequired
};
export default connect(
  mapStateToProps,
  { addUser }
)(SignUp);
