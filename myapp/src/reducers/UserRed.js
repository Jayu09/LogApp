import {
  ADD_USER,
  VERIFY_USER,
  LOGIN_ERROR,
  SIGNUP_ERROR,
  SIGN_OUT
} from "../actions/ActionType";

const initialState = {
  valid: false,
  token: "",
  error: "",
  id: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        token: action.payload.token,
        id: action.payload._id,
        valid: true,
        error: ""
      };
    case VERIFY_USER:
      return {
        ...state,
        token: action.payload,
        id: action.payload._id,
        valid: true,
        error: ""
      };
    case LOGIN_ERROR:
      return {
        ...state,
        valid: false,
        error: action.payload
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        valid: false,
        error: action.payload
      };
    case SIGN_OUT:
      return {
        ...state,
        valid: false,
        token: ""
      };
    default:
      return state;
  }
}
