import React, { Component } from "react";
import { connect } from "react-redux";
import { viewPosts, deletePost } from "../actions/PostAction";
import store from "../Store";
import Comment from "./Comment";
import UpdatePost from "./UpdatePost";
import PostForm from "./PostForm";
import CreateComment from "./CreateComment";
import "./App.css";
import { verifyUser } from "../actions/UserAction";
import SignIn from "./SignIn";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { postid: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const data = e.target.value;
    store.dispatch(deletePost(data));
  }
  Update = e => {
    return <PostForm id={e.target.value} />;
  };
  componentWillMount() {
    this.props.viewPosts();
  }

  render() {
    if (this.props.users) {
      const Items = this.props.posts.map(post => (
        <ul key={post._id}>
          <li>
            <fieldset className="fs">
              <h3>{post.title}</h3>
              <h4>{post.content}</h4>
              <UpdatePost post={post} />
              <button onClick={this.handleClick} value={post._id}>
                Delete
              </button>
              {console.log(post)}
              <CreateComment id={post._id} />
              <Comment id={post._id} />
            </fieldset>
          </li>
        </ul>
      ));
      return (
        <div>
          <div className="hp">POSTS</div>
          <hr />
          <div className="postlist">{Items}</div>
        </div>
      );
    } else {
      return <SignIn />;
    }
  }
}

const mapStateToProps = state => ({
  users: state.users.valid,
  usersid: state.users.id,
  posts: state.posts.items
});

export default connect(
  mapStateToProps,
  { viewPosts }
)(Post);
