import { combineReducers } from "redux";
import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../action_type/action_type";

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
});

export default rootReducer;
