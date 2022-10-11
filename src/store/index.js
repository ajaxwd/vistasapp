import { createStore, combineReducers } from "redux";
import { categoryReducer, productReducer, cartReducer } from "./reducers";

const rootReducer = combineReducers({
  category: categoryReducer,
  products: productReducer,
  cart: cartReducer,
});

export default createStore(rootReducer);
