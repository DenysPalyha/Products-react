import { SET_MODAL_ADD_PRODUCT, DATA_PRODUCT } from "./actions";

export const setMoadalAddProducts = (payload) => ({
  type: SET_MODAL_ADD_PRODUCT,
  payload,
});

export const dataProduct = (payload) => ({
  type: DATA_PRODUCT,
  payload,
});
