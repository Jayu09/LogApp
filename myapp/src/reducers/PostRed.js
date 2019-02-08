import {
  ADD_POST,
  VIEW_POST,
  GET_POST,
  DELETE_POST
} from "../actions/ActionType";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case VIEW_POST:
      return {
        ...state,
        items: action.payload
      };

    case ADD_POST:
      return {
        ...state,
        item: action.payload
      };

    case DELETE_POST:
      return {
        ...state,
        item: action.payload
      };

    case GET_POST:
      return {
        ...state,
        item: action.payload
      };

    default:
      return state;
  }
}
