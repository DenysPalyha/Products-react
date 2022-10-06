import { combineReducers } from "redux";
import modalReduser from "./modalProducts/modalReduser";
import productsReduser from "./products/productsReduser";
import productCartReducer from "./productCart/productCartReducer";
import modalDeleteReduser from "./modalDeletCart/modalDeleteReduser";
import favoriteProductReducer from "./favoriteProduct/favoriteProductReduser";

const rootReduser = combineReducers({
  products: productsReduser,
  modalAddProducts: modalReduser,
  cart: productCartReducer,
  deleteCart: modalDeleteReduser,
  favorites: favoriteProductReducer,
});

export default rootReduser;
