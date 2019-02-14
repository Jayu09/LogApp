import { connect } from "react-redux";
import SignUp from "../component/SignUp";

const mapStateToProps = state => {
  return {
    error: state.users.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addUser
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
