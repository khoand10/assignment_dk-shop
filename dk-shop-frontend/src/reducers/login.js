import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../action_type/action_type";

export default function (state = null, action) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.payload;
    case USER_LOGGED_OUT:
      return null;
    default:
      return state;
  }
}
