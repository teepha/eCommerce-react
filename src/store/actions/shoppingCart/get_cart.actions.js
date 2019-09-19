export const GET_CART_ITEMS = "GET_CART_ITEMS";
export const GET_CART_ITEMS_ERROR = "GET_CART_ITEMS_ERROR";
export const GET_CART_ITEMS_SUCCESS = "GET_CART_ITEMS_SUCCESS";
export const GET_TOTAL_AMOUNT = "GET_TOTAL_AMOUNT";
export const GET_TOTAL_AMOUNT_ERROR = "GET_TOTAL_AMOUNT__ERROR";
export const GET_TOTAL_AMOUNT_SUCCESS = "GET_TOTAL_AMOUNT__SUCCESS";

export const getCart = data => ({
  type: GET_CART_ITEMS,
  payload: data
});

export const getTotalAmount = data => ({
  type: GET_TOTAL_AMOUNT,
  payload: data
})
