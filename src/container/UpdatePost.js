import { connect } from "react-redux";
import UpdatePost from "../component/UpdatePost";
const mapDispatchToProps = dispatch => {
  return {
    updatePost
  };
};
export default connect(
  null,
  mapDispatchToProps
)(UpdatePost);
