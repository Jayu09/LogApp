import React, { Component } from "react";
import { connect } from "react-redux";
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
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#update"
        >
          Update Post
        </button>

        <div
          className="modal fade"
          id="update"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog bg-transparent" role="document">
            <div className="modal-content bg-transparent">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Update Post
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="col align-self-center">
                  <div className="col-6">Title:</div>
                  <div className="col-6">
                    <input
                      type="text"
                      onChange={this.change}
                      name="title"
                      placeholder={this.state.title}
                    />
                  </div>
                </div>
                <br />
                <div className="col align-self-center">
                  <div className="col-4">Content:</div>
                  <div className="col-4">
                    <textarea
                      rows="5"
                      onChange={this.change}
                      name="content"
                      placeholder={this.state.content}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.handleClick}
                  data-dismiss="modal"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updatePost: post => dispatch({ type: "UPDATE_POST", payload: post })
  };
};
export default connect(
  null,
  mapDispatchToProps
)(UpdatePost);
