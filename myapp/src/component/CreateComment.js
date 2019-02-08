import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment } from "../actions/CommentAction";
import propTypes from "prop-types";
class CreateComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };

    this.change = this.change.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  change(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick(e) {
    const comment = {
      token: this.props.userid,
      postId: this.props.id,
      content: this.state.content
    };
    this.props.addComment(comment);
  }
  render() {
    return (
      <div>
        <form>
          Comment:
          <input type="text" onChange={this.change} name="content" />
          <button onClick={e => this.handleClick(e)}>ADD</button>
        </form>
      </div>
    );
  }
}
CreateComment.propTypes = {
  addComment: propTypes.func.isRequired
};
const mapStateToProps = state => {
  return {
    userid: state.users.token
  };
};
export default connect(
  mapStateToProps,
  { addComment }
)(CreateComment);
