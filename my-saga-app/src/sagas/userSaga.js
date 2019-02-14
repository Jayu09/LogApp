import * as effect from "redux-saga/effects";
import * as typ from "../actions";
import * as userapi from '../api/apiUsers';

export function* addUser(action) {
  try {
    const api =yield effect.call(userapi.addUser , action.payload);
      if(api){
        yield effect.put({type:typ.SIGN_UP ,payload : api})
      }
      else{
        yield effect.put({type:typ.SIGNUP_ERROR ,payload : api.msg})
      }
    
  } catch (err) {
    alert("error : " + err);
  }
}
export function* loginUser(action) {
  try {
    const api =yield effect.call(userapi.loginUser , action.payload);
      if(api){
        yield effect.put({type:typ.VERIFY_USER ,payload : api})
      }
      else{
        yield effect.put({type:typ.LOGIN_ERROR ,payload : api.msg})
      }
    
  } catch (err) {
    alert("error : " + err);
  }
}
export function* signOut(){
  try{
    yield effect.call(userapi.logoutUser);
    yield effect.put({type:typ.SIGN_OUT})
  }
  catch(err){
    alert("error : " +err);
  }
}