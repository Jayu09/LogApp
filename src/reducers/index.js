import { combineReducers } from "redux";
import postRed from "./PostRed";
import commentRed from "./CommentRed";
import UserRed from "./UserRed";

export default combineReducers({
  posts: postRed,
  comments: commentRed,
  users: UserRed
});
