import { GET_CATEGORY, REMOVE_CATEGORY, NEW_CATEGORY} from "../action_type/action_type";
import {BACK_END_URL} from "../config";
import Axios from "axios";

export const getCategories = (sizePerPage, page) => {
  return async (dispatch) => {
    const res = await Axios.get(`${BACK_END_URL}/api/categories`);
    if (res.status === 200) {
        dispatch({
            type: GET_CATEGORY,
            payload: res.data,
        });
    }
    return res;
  };
};

export const removeCategory = (categoryId) => {
  return async (dispatch) => {
    const res = await Axios.delete(`${BACK_END_URL}/api/categories/${categoryId}`);
    if (res.status === 200) {
        dispatch({
            type: REMOVE_CATEGORY,
            payload: categoryId,
        });
    }
    return res;
  };
}

export const newCategory = (newCategory) => {
  return async (dispatch) => {
    const res = await Axios.post(`${BACK_END_URL}/api/categories`, newCategory);
    console.log('getCategories ', res);
    if (res.status === 200) {
        dispatch({
            type: NEW_CATEGORY,
            payload: res.data,
        });
    }
    return res;
  };
}