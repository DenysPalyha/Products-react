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
import produce from "immer";

const initialState = {
  cart: [],
  countCart: 0,
};

const productCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_IN_CART: {
      return produce(state, (draftState) => {
        const index = draftState.cart.findIndex(
          (item) => item.id === action.payload.id
        );

        if (index === -1) {
          draftState.cart.push({
            ...action.payload,
            count: 1,
          });
        } else {
          draftState.cart[index].count += 1;
        }
        localStorage.setItem("cart", JSON.stringify(draftState.cart));
      });
    }

    case GET_PRODUCT_CART: {
      return produce(state, (draftState) => {
        draftState.cart = action.payload;
      });
    }

    case INCRIMENT_COUNT_CART: {
      return produce(state, (draftState) => {
        const index = draftState.cart.findIndex(
          (item) => item.id === action.payload
        );

        if (index !== -1) {
          draftState.cart[index].count += 1;
        }

        localStorage.setItem("cart", JSON.stringify(draftState.cart));
      });
    }

    case DECREMENT_COUNT_CART: {
      return produce(state, (draftState) => {
        const index = draftState.cart.findIndex(
          (item) => item.id === action.payload
        );

        if (index !== -1 && draftState.cart[index].count > 1) {
          draftState.cart[index].count -= 1;
        }

        localStorage.setItem("cart", JSON.stringify(draftState.cart));
      });
    }

    case DELETE_PRODUCT_IN_CART: {
      return produce(state, (draftState) => {
        const index = draftState.cart.findIndex(
          (item) => item.id === action.payload.id
        );

        if (index !== -1) {
          draftState.cart.splice(index, 1);
        }

        localStorage.setItem("cart", JSON.stringify(draftState.cart));
      });
    }

    case CART_COUNT_PRODUCT: {
      return produce(state, (draftState) => {
        draftState.countCart = draftState.cart.reduce((acc, item) => {
          return (acc += item.count);
        }, 0);
        localStorage.setItem("countCart", JSON.stringify(draftState.countCart));
      });
    }

    case SET_IS_FAVORITE_CART_PRODUCT: {
      return produce(state, (draftState) => {
        action.payload.favorites.forEach((item) => {
          if (item.id === action.payload.id) {
            const cartIndex = draftState.cart.findIndex(
              (item) => item.id === action.payload.id
            );

            draftState.cart[cartIndex]["isActiveFavorite"] = true;
          }
        });

        localStorage.setItem("cart", JSON.stringify(draftState.cart));
      });
    }

    case FIND_AND_SET_IS_FAVORIT_IN_CART: {
      return produce(state, (draftState) => {
        const indexFavorite = action.payload.favorites.findIndex(
          (item) => item.id === action.payload.id
        );
        if (indexFavorite === -1) {
          const indexCart = draftState.cart.findIndex(
            (item) => item.id === action.payload.id
          );
          if (indexCart !== -1) {
            draftState.cart[indexCart]["isActiveFavorite"] = true;
          }
        } else {
          const indexCart = draftState.cart.findIndex(
            (item) => item.id === action.payload.id
          );
          if (indexCart !== -1) {
            draftState.cart[indexCart]["isActiveFavorite"] = false;
          }
        }
        localStorage.setItem("cart", JSON.stringify(draftState.cart));
      });
    }

    case EMPTY_SHOPPING_CART: {
      return produce(state, (draftState) => {
        draftState.cart = [];
        draftState.countCart = 0;

        localStorage.setItem("cart", JSON.stringify(draftState.cart));
        localStorage.setItem("countCart", JSON.stringify(draftState.countCart));
      });
    }

    default: {
      return state;
    }
  }
};

export default productCartReducer;
