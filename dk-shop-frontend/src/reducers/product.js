import { GET_PRODUCT, REMOVE_PRODUCT, NEW_PRODUCT, UPDATE_PRODUCT} from "../action_type/action_type";
import {argsToOject} from "utils/utils";

export default function (state = {}, action) {
    let newState;
  switch (action.type) {
    case GET_PRODUCT:
        newState = argsToOject(action.payload);
        return newState;
    case REMOVE_PRODUCT:
        newState = {...state};
        delete newState[action.payload];
        return newState;
    case NEW_PRODUCT:
        newState = {...state};
        const newPRODUCT = action.payload;
        newState[newPRODUCT.id] = newPRODUCT;
        return newState;
    case UPDATE_PRODUCT:
        newState = {...state};
        newState[action.payload.id] = action.payload;
        return newState;
    default:
      return state;
  }
}
