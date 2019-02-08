import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import JWT from "jsonwebtoken";
import reducers from "./reducers";

const JWToken = localStorage.getItem("token");
const initialState = {
  users: {
    token: JWToken,
    valid: JWToken ? true : false,
    id   : JWToken ? JWT.decode(JWToken).sub : null
  }
};
const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;
