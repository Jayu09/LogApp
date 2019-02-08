import {
  ADD_USER,
  VERIFY_USER,
  LOGIN_ERROR,
  SIGNUP_ERROR,
  SIGN_OUT
} from "./ActionType";
import axios from "axios";
export const addUser = user => async dispatch => {
  console.log(user);
  await axios
    .post("api/users/register", user)
    .then(res => {
      console.log(res);
      if (res.data.token) {
        const token = res.data.token;
        localStorage.setItem("token", token);
        dispatch({
          type: ADD_USER,
          payload: res.data
        });
      } else {
        dispatch({
          type: SIGNUP_ERROR,
          payload: res.data.msg
        });
      }
    })
    .catch(err => console.log(err));
};
export const loginUser = user => async dispatch => {
  console.log("user action", user);
  await axios
    .post("api/users/authentication", user)
    .then(res => {
      console.log(res);
      if (res.data.token) {
        const token = res.data.token;
        console.log(res.data)
        localStorage.setItem("token", token);
        dispatch({
          type: VERIFY_USER,
          payload: res.data
        });
      } else {
        dispatch({
          type: LOGIN_ERROR,
          payload: res.data.msg
        });
      }
    })
    .catch(err => console.log(err));
};

export const verifyUser = async dispatch => {
  const data = localStorage.getItem("token");
  await axios
    .post("api/users/authentication", data)
    .then(res => {
      console.log(res);
      if (res.data.token) {
        dispatch({
          type: VERIFY_USER,
          payload: res.data
        });
      } else {
        dispatch({
          type: LOGIN_ERROR,
          payload: "please login again"
        });
      }
    })
    .catch(err => console.log(err));
};
export const signOut = () => {
  return dispatch => {
    localStorage.removeItem("token", "");
    dispatch({
      type: SIGN_OUT,
      payload: ""
    });
  };
};
