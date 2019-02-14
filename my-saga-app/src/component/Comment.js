import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = { status: this.props.id };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.props.deleteComment(e.target.value);
  }
  componentWillMount() {
    this.props.viewComments();
  }
  isShow = e => {
    if (e === this.props.usersid) return true;
    else return false;
  };
  render() {
    const Items = [];
    this.props.comment.map(comment => {
      if (comment.postId === this.props.id)
        Items.push(
          <ul key={comment._id}>
            <li className="container">
              <div className=" row">
                <div className="col-sm-9">
                  {comment.content}
                  {this.isShow(comment.profileId) ? (
                    <button
                      className="col-sm-3 btn btn-sm btn-danger"
                      onClick={this.handleClick}
                      value={comment._id}
                    >
                      Delete
                    </button>
                  ) : null}
                  <br />
                  <br />
                </div>
              </div>
            </li>
          </ul>
        );
        return Items;
    });

    return (
      <div>
        <h6>COMMENTS</h6>
        <div className="commentlist">{Items}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  usersid: state.users.id,
  comment: state.comments.items
});

const mapDispatchToProps = dispatch => {
  return {
    viewComments: () => dispatch({ type: "COMMENT" }),
    deleteComment: id => dispatch({ type: "DELETE_COMMENT", payload: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment);
