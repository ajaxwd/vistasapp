import { cartTypes } from "../types";

const { ADD_TO_CART } = cartTypes;

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  item,
});
