import {
  SET_FAVORITE_PRODUCT,
  GET_FAVORITE_PRODUCTS,
  COUNT_FAVORITE_PRODUCT,
} from "./actions";

export const setFavoriteProductAC = (payload) => {
  return { type: SET_FAVORITE_PRODUCT, payload };
};

export const getFevoriteProducts = () => (dispatch) => {
  const favorites = JSON.parse(localStorage.getItem("favorite"));
  const countFavorite = JSON.parse(localStorage.getItem("countFavorite"));

  if (favorites !== null) {
    dispatch({ type: GET_FAVORITE_PRODUCTS, payload: favorites });
  }
  if (countFavorite !== null) {
    dispatch({ type: COUNT_FAVORITE_PRODUCT, payload: countFavorite });
  }
};

export const countFavoriteProductAC = () => {
  return { type: COUNT_FAVORITE_PRODUCT };
};
