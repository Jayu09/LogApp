import { connect } from "react-redux";
import Post from '../component/Post';

const mapStateToProps = state => ({
  users: state.users.valid,
  usersid: state.users.id,
  posts: state.posts.items
});

const mapDispatchToProps = dispatch => {
  return {
    viewPosts,
    deletePost
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
