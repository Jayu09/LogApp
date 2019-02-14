import { put } from "redux-saga/effects";

import {NEW_COMMENT, COMMENT, DELETE_COMMENT, ADD_USER, LOGIN_USER, LOG_OUT, POST, UPDATE_POST, DELETE_POST , NEW_POST} from './index';



export const viewComments =() => put({ type: COMMENT });
export const deleteComment =(id) => put({ type: DELETE_COMMENT, payload: id })
export const  addComment = comment => put({ type: NEW_COMMENT, payload: comment })