import { connect } from "react-redux";
import App from '../App';

const mapStateToProps = state => {
  return {
    valid: state.users.valid
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signOut
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
