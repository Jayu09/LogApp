import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../actions/PostAction";
import propTypes from "prop-types";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: this.props.userid,
      title: "title",
      content: "content"
    };

    this.change = this.change.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  change(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleClick() {
    this.props.addPost(this.state);
  }
  render() {
    return (
      <div className="input-group mb-3">
        {this.props.valid ? (
          <form className="px-4 py-3">
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                onChange={this.change}
                name="title"
                placeholder={this.state.title}
              />
            </div>
            <div className="form-group">
              <label>Content</label>
              <textarea
                rows="6"
                className="form-control"
                id="content"
                onChange={this.change}
                name="content"
                placeholder={this.state.content}
              />
            </div>
            <div className="form-group">
              <div className="form-check" />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleClick}
            >
              Add Post
            </button>
          </form>
        ) : (
          <div>
            please login first
          </div>
        )}

        <div className="dropdown-divider" />
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: propTypes.func.isRequired
};
const mapStateToProps = state => {
  return {
    valid: state.users.valid,
    userid: state.users.token
  };
};
export default connect(
  mapStateToProps,
  { addPost }
)(PostForm);
