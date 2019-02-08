import { ADD_COMMENT, VIEW_COMMENT, DELETE_COMMENT } from "./ActionType";
import axios from "axios";
// to add Comment
export const addComment = comment => dispatch => {
  console.log("comment:" + comment);
  axios
    .post("api/comments", comment)
    .then(comments => dispatch(viewComments()));
};
// to view comments
export const viewComments = () => dispatch => {
  axios.get("api/comments").then(comment =>
    dispatch({
      type: VIEW_COMMENT,
      payload: comment.data
    })
  );
};
//to delete comments
export const deleteComment = payload => dispatch => {
  const token = localStorage.getItem('token');
  axios
    .post("api/comments/delete", {payload , token})
    .then(comments => dispatch(viewComments()));
};
