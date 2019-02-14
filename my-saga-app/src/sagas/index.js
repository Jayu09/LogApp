import * as effect from "redux-saga/effects";
import * as typ from "../actions";
import * as posts from "./postSaga";
import * as comments from "./commentSaga";
import * as users from "./userSaga";

export function* rootSaga() {
  yield effect.all([
      yield effect.takeLatest(typ.ADD_USER,users.addUser),
      yield effect.takeLatest(typ.LOGIN_USER,users.loginUser),
      yield effect.takeLatest(typ.LOG_OUT , users.signOut),
      yield effect.takeEvery(typ.NEW_POST , posts.addPost),
      yield effect.takeEvery(typ.POST , posts.viewPosts),
      yield effect.takeLatest(typ.DELETE_POST , posts.deletePost),
      yield effect.takeLatest(typ.UPDATE_POST ,posts.updatePost),
      yield effect.takeEvery(typ.NEW_COMMENT ,comments.addComment),
      yield effect.takeEvery(typ.COMMENT ,comments.viewComment),
      yield effect.takeLatest(typ.DELETE_COMMENT , comments.deleteComment)
    ]);
}
