import { connect } from "react-redux";
import Comment from '../component/Comment';
const mapStateToProps = state => ({
  usersid: state.users.id,
  comment: state.comments.items
});

const mapDispatchToProps = dispatch => {
  return {
    viewComments,
    deleteComment
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment);
