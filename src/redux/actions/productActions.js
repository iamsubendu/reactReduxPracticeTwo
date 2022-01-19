import { actionTypes } from "../constants/actionTypes";
import fakeApi from "../../apis/fakeApi";

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: actionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};

export const removeSelectedProducts = () => {
  return {
    type: actionTypes.REMOVE_SELECTED_PRODUCTS,
  };
};

export const fetchProducts = () => {
  //adding this as middleware
  return async (dispatch) => {
    const res = await fakeApi.get("/products");
    dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: res.data });
  };
};

export const fetchProduct = (id) => {
  //adding this as middleware
  return async (dispatch) => {
    const res = await fakeApi.get(`/products/${id}`);
    dispatch({ type: actionTypes.SELECTED_PRODUCTS, payload: res.data });
  };
};
