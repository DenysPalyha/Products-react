import { GET_PRODUCTS, SET_IS_FAVORITE_PRODUCT } from "./actions";
import produce from "immer";

const initialState = {
  products: [],
};

const productsReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return produce(state, (draftState) => {
        draftState.products = action.payload;
      });
    }

    case SET_IS_FAVORITE_PRODUCT: {
      return produce(state, (draftState) => {
        const index = action.payload.favorites.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index === -1) {
          const index = draftState.products.findIndex(
            (item) => item.id === action.payload.id
          );
          draftState.products[index]["isActiveFavorite"] = true;
          localStorage.setItem("products", JSON.stringify(draftState.products));
        } else {
          const index = draftState.products.findIndex(
            (item) => item.id === action.payload.id
          );

          draftState.products[index]["isActiveFavorite"] = false;
          localStorage.setItem("products", JSON.stringify(draftState.products));
        }
      });
    }

    default: {
      return state;
    }
  }
};

export default productsReduser;
