import { SET_MODAL_DELETE_PRODUCT, DATA_PRODUCT_CART } from "./actions";
import produce from "immer";

const initialState = {
  isOpenModalDelete: false,
  dataProductCart: {},
};

const modalDeleteReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_DELETE_PRODUCT: {
      return produce(state, (draftState) => {
        draftState.isOpenModalDelete = action.payload;
      });
    }

    case DATA_PRODUCT_CART: {
      return produce(state, (draftState) => {
        draftState.dataProductCart = action.payload;
      });
    }

    default: {
      return state;
    }
  }
};

export default modalDeleteReduser;
