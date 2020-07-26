import { combineReducers } from "redux";
import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../action_type/action_type";
import categories from "./category";

const user = (state = null, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user,
  categories,
});

export default rootReducer;
