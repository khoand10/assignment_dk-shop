import { GET_CATEGORY, REMOVE_CATEGORY, NEW_CATEGORY, UPDATE_CATEGORY, GET_PRODUCT} from "../action_type/action_type";
import {BACK_END_URL} from "../config";
import Axios from "axios";

export const getProducts = (sizePerPage, page) => {
  return async (dispatch) => {
    const res = await Axios.get(`${BACK_END_URL}/api/products`);
    if (res.status === 200) {
        dispatch({
            type: GET_PRODUCT,
            payload: res.data,
        });
    }
    return res;
  };
};

// export const removeCategory = (categoryId) => {
//   return async (dispatch) => {
//     const res = await Axios.delete(`${BACK_END_URL}/api/categories/${categoryId}`);
//     if (res.status === 200) {
//         dispatch({
//             type: REMOVE_CATEGORY,
//             payload: categoryId,
//         });
//     }
//     return res;
//   };
// }

// export const newCategory = (newCategory) => {
//   return async (dispatch) => {
//     const res = await Axios.post(`${BACK_END_URL}/api/categories`, newCategory);
//     if (res.status === 200) {
//         dispatch({
//             type: NEW_CATEGORY,
//             payload: res.data,
//         });
//     }
//     return res;
//   };
// }

// export const updateCategory = (newCategory) => {
//   return async (dispatch) => {
//     const res = await Axios.patch(`${BACK_END_URL}/api/categories/${newCategory.id}`, newCategory);
//     if (res.status === 200) {
//         dispatch({
//             type: UPDATE_CATEGORY,
//             payload: res.data,
//         });
//     }
//     return res;
//   };
// }

// export const getCategory = (categoryId) => {
//   const res = Axios.get(`${BACK_END_URL}/api/categories/${categoryId}`);
//   return res;
// }