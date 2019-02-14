import React, { Component } from "react";
//import { connect } from "react-redux";
import Comment from "./Comment";
import UpdatePost from "./UpdatePost";
import CreateComment from "./CreateComment";
import "../CSS/App.css";
import {viewPosts ,deletePost} from '../actions/actionFunc';
import SignIn from "./SignIn";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { status: this.props.post };
    this.handleClick = this.handleClick.bind(this);
  }
  isShow = e => {
    if (e === this.props.usersid) return true;
    else return false;
  };

  handleClick(e) {
    deletePost(e.target.value);
  }
  componentWillMount() {
    viewPosts();
  }

  render() {
    if (this.props.users) {
      const Items = this.props.posts.map(post => (
        <ul className="postlist align-self-center" key={post._id}>
          <li>
            <fieldset className="fs">
              <div className=" align-self-center font-weight-bold text-primary ">
                Title:
              </div>
              <div className="align-self-center text-secondary font-weight-normal h-auto">
                {post.title}
              </div>
              <div className="align-self-center font-weight-bold text-primary text-wrap">
                Content:
              </div>
              <div className="align-self-center text-secondary font-weight-normal word-wrap h-auto">
                {post.content}
              </div>
              {this.isShow(post.profileId) ? (
                <div className="col-4">
                  <br />
                  <UpdatePost post={post} />
                  <br />
                  <button
                    onClick={this.handleClick}
                    value={post._id}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              ) : null}
              <br />
              <CreateComment id={post._id} />
              <br />
              <Comment id={post._id} />
            </fieldset>
          </li>
        </ul>
      ));
      return <div>{Items}</div>;
    } else {
      return <SignIn />;
    }
  }
}

// const mapStateToProps = state => ({
//   users: state.users.valid,
//   usersid: state.users.id,
//   posts: state.posts.items
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     viewPosts: () => dispatch({ type: "POST" }),
//     deletePost: id => dispatch({ type: "DELETE_POST", id: id })
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Post);
