import { SET_MODAL_ADD_PRODUCT, DATA_PRODUCT } from "./actions";
import produce from "immer";

const initialState = {
  isOpenModalAdd: false,
  dataProduct: {},
};

const modalReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_ADD_PRODUCT: {
      return produce(state, (draftState) => {
        draftState.isOpenModalAdd = action.payload;
      });
    }

    case DATA_PRODUCT: {
      return produce(state, (draftState) => {
        draftState.dataProduct = action.payload;
      });
    }

    default: {
      return state;
    }
  }
};

export default modalReduser;
