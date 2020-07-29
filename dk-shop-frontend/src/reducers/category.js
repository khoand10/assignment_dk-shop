import { GET_CATEGORY, REMOVE_CATEGORY, NEW_CATEGORY, UPDATE_CATEGORY} from "../action_type/action_type";
import {argsToOject} from "utils/utils";

export default function (state = {}, action) {
    let newState;
  switch (action.type) {
    case GET_CATEGORY:
        newState = argsToOject(action.payload);
        return newState;
    case REMOVE_CATEGORY:
        newState = {...state};
        delete newState[action.payload];
        return newState;
    case NEW_CATEGORY:
        newState = {...state};
        const newCategory = action.payload;
        newState[newCategory.id] = newCategory;
        return newState;
    case UPDATE_CATEGORY:
        newState = {...state};
        newState[action.payload.id] = action.payload;
        return newState;
    default:
      return state;
  }
}
