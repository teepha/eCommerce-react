export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const ADD_CART_ITEM_ERROR = "ADD_CART_ITEM_ERROR";
export const ADD_CART_ITEM_SUCCESS = "ADD_CART_ITEM_SUCCESS";

export const addItemToCart = data => ({
  type: ADD_CART_ITEM,
  payload: data
});
