import { SET_MODAL_DELETE_PRODUCT, DATA_PRODUCT_CART } from "./actions";

export const setMoadalDeleteProductAC = (payload) => ({
  type: SET_MODAL_DELETE_PRODUCT,
  payload,
});

export const dataProductCartAC = (payload) => ({
  type: DATA_PRODUCT_CART,
  payload,
});
