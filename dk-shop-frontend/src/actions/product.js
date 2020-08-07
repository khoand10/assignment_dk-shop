import { NEW_PRODUCT, GET_PRODUCT, REMOVE_PRODUCT} from "../action_type/action_type";
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

export const removeProduct = (productID) => {
  return async (dispatch) => {
    const res = await Axios.delete(`${BACK_END_URL}/api/products/${productID}`);
    if (res.status === 200) {
        dispatch({
            type: REMOVE_PRODUCT,
            payload: productID,
        });
    }
    return res;
  };
}

export const newProduct = (newProduct) => {
  return async (dispatch) => {
    const res = await Axios.post(`${BACK_END_URL}/api/products`, newProduct);
    if (res.status === 200) {
        dispatch({
            type: NEW_PRODUCT,
            payload: res.data,
        });
    }
    return res;
  };
}

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

export const getProduct = (productId) => {
  const res = Axios.get(`${BACK_END_URL}/api/products/${productId}`);
  return res;
}