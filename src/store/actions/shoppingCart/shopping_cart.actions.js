export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const ADD_CART_ITEM_ERROR = "ADD_CART_ITEM_ERROR";
export const ADD_CART_ITEM_SUCCESS = "ADD_CART_ITEM_SUCCESS";
export const GET_CART_ITEMS = "GET_CART_ITEMS";
export const GET_CART_ITEMS_ERROR = "GET_CART_ITEMS_ERROR";
export const GET_CART_ITEMS_SUCCESS = "GET_CART_ITEMS_SUCCESS";
export const GET_TOTAL_AMOUNT = "GET_TOTAL_AMOUNT";
export const GET_TOTAL_AMOUNT_ERROR = "GET_TOTAL_AMOUNT_ERROR";
export const GET_TOTAL_AMOUNT_SUCCESS = "GET_TOTAL_AMOUNT_SUCCESS";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const REMOVE_CART_ITEM_ERROR = "REMOVE_CART_ITEM_ERROR";
export const REMOVE_CART_ITEM_SUCCESS = "REMOVE_CART_ITEM_SUCCESS";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";
export const UPDATE_CART_ITEM_ERROR = "UPDATE_CART_ITEM_ERROR";
export const UPDATE_CART_ITEM_SUCCESS = "UPDATE_CART_ITEM_SUCCESS";

export const addItemToCart = data => ({
  type: ADD_CART_ITEM,
  payload: data
});

export const getCart = data => ({
  type: GET_CART_ITEMS,
  payload: data
});

export const getTotalAmount = data => ({
  type: GET_TOTAL_AMOUNT,
  payload: data
});

export const removeItemFromCart = data => ({
  type: REMOVE_CART_ITEM,
  payload: data
});

export const updateCartItem = data => ({
  type: UPDATE_CART_ITEM,
  payload: data
});
