import { GET_CATEGORY } from "../action_type/action_type";
import {argsToOject} from "utils/utils";

export default function (state = {}, action) {
    let newState;
  switch (action.type) {
    case GET_CATEGORY:
        newState = argsToOject(action.payload);
        return newState;
    default:
      return state;
  }
}
