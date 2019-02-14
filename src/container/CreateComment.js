import { connect } from "react-redux";
import CreateComment from "../component/CreateComment";
const mapStateToProps = state => {
  return {
    userid: state.users.token
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addComment
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateComment);
