export const GET_CART_ITEMS = 'GET_CART_ITEMS';
export const GET_CART_ITEMS_ERROR = 'GET_CART_ITEMS_ERROR';
export const GET_CART_ITEMS_SUCCESS = 'GET_CART_ITEMS_SUCCESS';


export const getCartItems = (data) => ({
    type: GET_CART_ITEMS,
    payload: data
});
