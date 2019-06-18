export const DELETE_CART = 'DELETE_CART';
export const DELETE_CART_ERROR = 'DELETE_CART_ERROR';
export const DELETE_CART_SUCCESS = 'DELETE_CART_SUCCESS';


export const deleteCart = (data) => ({
    type: DELETE_CART,
    payload: data
});
