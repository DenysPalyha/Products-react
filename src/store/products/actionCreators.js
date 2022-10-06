import { GET_PRODUCTS, SET_IS_FAVORITE_PRODUCT } from "./actions";

export const getProductsAC = () => async (dispatch) => {
  try {
    const data = await fetch("./data.json").then((res) => res.json());

    dispatch({ type: GET_PRODUCTS, payload: data });
  } catch (err) {
    console.warn(err);
  }

  const products = JSON.parse(localStorage.getItem("products"));

  if (products !== null) {
    dispatch({ type: GET_PRODUCTS, payload: products });
  }
};

export const setIsFavoriteProductAC = (payload) => {
  return { type: SET_IS_FAVORITE_PRODUCT, payload };
};
