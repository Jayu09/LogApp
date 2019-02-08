import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePost } from "../actions/PostAction";
import propTypes from "prop-types";
import "./App.css";

class UpdatePost extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;

    this.change = this.change.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  change(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick() {
    this.props.updatePost(this.state);
  }
  render() {
    return (
      <div className="dropdown">
        <button className="dropbtn">Edit</button>
        <div className="dropdown-content">
          Title:
          <input
            type="text"
            onChange={this.change}
            name="title"
            placeholder={this.state.title}
          />
          <br />
          Content:
          <input
            type="text"
            onChange={this.change}
            name="content"
            placeholder={this.state.content}
          />
          <br />
          <button onClick={this.handleClick}>Update Post</button>
        </div>
      </div>
    );
  }
}

UpdatePost.propTypes = {
  updatePost: propTypes.func.isRequired
};

export default connect(
  null,
  { updatePost }
)(UpdatePost);
