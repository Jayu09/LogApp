import { connect } from "react-redux";
import SignIn from '../component/SignIn';
const mapStateToProps = state => {
  return {
    error: state.users.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    loginUser
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
