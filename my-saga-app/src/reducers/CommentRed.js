import {  VIEW_COMMENT, ADD_COMMENT } from  '../actions';


const initialState = {
  items:[],
  item:{}
}

export default function(state = initialState , action){
  switch(action.type)
  {
  
  case ADD_COMMENT:
  return{
  ...state,
  item:action.payload
  }
  
  case VIEW_COMMENT:
  return{
  ...state,
  items:action.payload
  }

  default :
  return state;
  }
}