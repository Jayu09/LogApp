import { connect } from "react-redux";
import PostForm from '../component/PostForm';
const mapDispatchToProps = dispatch => {
  return {
    addPost
    };
};
const mapStateToProps = state => {
  return {
    valid: state.users.valid,
    userid: state.users.id
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
