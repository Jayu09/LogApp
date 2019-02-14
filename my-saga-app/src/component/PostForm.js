import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
      <div className="container">
        {this.props.valid ? (
          <form className="card  bg-transparent">
            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                onChange={this.change}
                className="form-control"
                name="title"
                placeholder={this.state.title}
              />
            </div>
            <div className="form-group">
              <label>Content:</label>
              <textarea
                rows="5"
                onChange={this.change}
                className="form-control"
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
          <div
            class="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Did not Recognized</strong>
            <br /> You should SignIn
            <br />
            <Link to="/SignIn">SignIn here</Link>
          </div>
        )}

        <div className="dropdown-divider" />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: post => dispatch({ type: "NEW_POST", payload: post })
  };
};
const mapStateToProps = state => {
  return {
    valid: state.users.valid,
    userid: state.users.id
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
