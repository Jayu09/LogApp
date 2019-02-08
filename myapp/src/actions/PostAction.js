import {
  ADD_POST,
  VIEW_POST,
  DELETE_POST,
  UPDATE_POST,
  GET_POST
} from "./ActionType";

import axios from "axios";

//to add post
export const addPost = post => dispatch => {
  axios.post("api/posts", post).then(posts =>
    dispatch({
      type: ADD_POST,
      payload: post
    })
  );
};

/// to view post
export const viewPosts = () => dispatch => {
  axios
    .get("api/posts")
    .then(posts =>
      dispatch({
        type: VIEW_POST,
        payload: posts.data
      })
    )
    .catch(err => console.log(err));
};

//to delete post

export const deletePost = payload => dispatch => {
  console.log(payload);
  const token = localStorage.getItem('token');
  axios
    .post("api/posts/delete", { payload ,token})
    .then(posts => dispatch(viewPosts()));
};

export const updatePost = payload => dispatch => {
  const token = localStorage.getItem('token');
  console.log(payload);
  axios.put("api/posts", { payload ,token}).then(posts => dispatch(viewPosts()));
};
