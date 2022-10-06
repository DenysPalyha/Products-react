import {
  ADD_PRODUCT_IN_CART,
  GET_PRODUCT_CART,
  INCRIMENT_COUNT_CART,
  DECREMENT_COUNT_CART,
  DELETE_PRODUCT_IN_CART,
  CART_COUNT_PRODUCT,
  SET_IS_FAVORITE_CART_PRODUCT,
  FIND_AND_SET_IS_FAVORIT_IN_CART,
  EMPTY_SHOPPING_CART,
} from "./actions";

export const addProductIncartAC = (productCart) => {
  return { type: ADD_PRODUCT_IN_CART, payload: productCart };
};

export const getProductIncartAC = () => (dispatch) => {
  const productsCart = JSON.parse(localStorage.getItem("cart"));
  const countCart = JSON.parse(localStorage.getItem("countCart"));

  if (productsCart !== null) {
    dispatch({ type: GET_PRODUCT_CART, payload: productsCart });
  }
  if (countCart !== null) {
    dispatch({ type: CART_COUNT_PRODUCT, payload: countCart });
  }
};

export const incrimentCountCartAC = (id) => {
  return { type: INCRIMENT_COUNT_CART, payload: id };
};

export const decrementCountCartAC = (id) => {
  return { type: DECREMENT_COUNT_CART, payload: id };
};

export const deleteProductCartAC = (payload) => {
  return { type: DELETE_PRODUCT_IN_CART, payload };
};

export const cartCountProductAC = () => {
  return { type: CART_COUNT_PRODUCT };
};

export const setIsfavoriteCartProductAC = (payload) => {
  return { type: SET_IS_FAVORITE_CART_PRODUCT, payload };
};

export const findAndSetIsFaforiteInCart = (payload) => {
  return { type: FIND_AND_SET_IS_FAVORIT_IN_CART, payload };
};

export const emptyShoppingCartAC = () => {
  return { type: EMPTY_SHOPPING_CART };
};
