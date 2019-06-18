export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const REMOVE_FROM_CART_ERROR = 'REMOVE_FROM_CART_ERROR';
export const REMOVE_FROM_CART_SUCCESS = 'REMOVE_FROM_CART_SUCCESS';


export const removeFromCart = (data) => ({
    type: REMOVE_FROM_CART,
    payload: data
});
