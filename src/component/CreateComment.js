import React, { Component } from "react";
import { addComment } from "../actions/actionFunc";

export default class CreateComment extends Component {
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
      postId: this.props.id,
      content: this.state.content
    };
    addComment(comment);
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
// const mapStateToProps = state => {
//   return {
//     userid: state.users.token
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     addComment: comment => dispatch({ type: "NEW_COMMENT", payload: comment })
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CreateComment);
