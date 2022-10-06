import {
  SET_FAVORITE_PRODUCT,
  GET_FAVORITE_PRODUCTS,
  COUNT_FAVORITE_PRODUCT,
} from "./actions";
import produce from "immer";

const initialState = {
  favorite: [],
  countFavorit: 0,
};

const favoriteProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITE_PRODUCT: {
      return produce(state, (draftState) => {
        const index = draftState.favorite.findIndex(
          (item) => item.id === action.payload.id
        );

        if (index === -1) {
          draftState.favorite.push({
            ...action.payload,
            isActiveFavorite: true,
            countFavorite: 1,
          });
        } else {
          draftState.favorite.splice(index, 1);
        }

        localStorage.setItem("favorite", JSON.stringify(draftState.favorite));
      });
    }

    case GET_FAVORITE_PRODUCTS: {
      return produce(state, (draftState) => {
        draftState.favorite = action.payload;
      });
    }

    case COUNT_FAVORITE_PRODUCT: {
      return produce(state, (draftState) => {
        draftState.countFavorit = draftState.favorite.reduce((acc, item) => {
          return (acc += item.countFavorite);
        }, 0);
        localStorage.setItem(
          "countFavorite",
          JSON.stringify(draftState.countFavorit)
        );
      });
    }

    default: {
      return state;
    }
  }
};

export default favoriteProductReducer;
