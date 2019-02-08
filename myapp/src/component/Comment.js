import React, { Component } from "react";
import { connect } from "react-redux";
import { viewComments, deleteComment } from "../actions/CommentAction";
import store from "../Store";
import "./App.css";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    store.dispatch(deleteComment(e.target.value));
  }

  componentWillMount() {
    this.props.viewComments();
  }

  render() {
    const Items = [];
    this.props.comment.map(comment => {
      if (comment.postId === this.props.id)
        Items.push(
          <ul key={comment._id}>
            <li>
              <div className="comment">
                <div className="comment-content">{comment.content}</div>
                <button
                  className="comment-btn"
                  onClick={this.handleClick}
                  value={comment._id}
                >
                  Delete
                </button>
                {console.log(comment)}
              </div>
            </li>
          </ul>
        );
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
  comment: state.comments.items
});
export default connect(
  mapStateToProps,
  { viewComments }
)(Comment);
