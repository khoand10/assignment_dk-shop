import { GET_CATEGORY } from "../action_type/action_type";
import {BACK_END_URL} from "../config";
import Axios from "axios";

export const getCategories = (sizePerPage, page) => {
  return async (dispatch) => {
    const res = await Axios.get(`${BACK_END_URL}/api/categories`);
    console.log('getCategories ', res);
    if (res.status === 200) {
        dispatch({
            type: GET_CATEGORY,
            payload: res.data,
        });
    }
    return res;
  };
};