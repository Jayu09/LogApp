import * as effect from "redux-saga/effects";
import * as typ from "../actions";
import { newComment, removeComment, getComments } from "../api/apiComment";

import axios from "axios";
const commentUrl = "api/comments/";

export function* addComment(action) {
  try {
    yield effect.call(newComment , action);
    yield effect.put({ type: typ.COMMENT });
  } catch (err) {
    alert("error" + err);
  }
}
export function* viewComment(action) {
  try {
    const data = yield effect.call(getComments);
    yield effect.put({ type: typ.VIEW_COMMENT, payload: data });
  } catch (err) {
    alert("error" + err);
  }
}

export function* deleteComment(action) {
  try {
    yield effect.call(removeComment , action);
    yield effect.put({ type: typ.COMMENT });
  } catch (err) {
    alert("error" + err);
  }
}
