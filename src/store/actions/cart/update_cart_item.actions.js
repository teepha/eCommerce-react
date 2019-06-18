export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';
export const UPDATE_CART_ITEM_ERROR = 'UPDATE_CART_ITEM_ERROR';
export const UPDATE_CART_ITEM_SUCCESS = 'UPDATE_CART_ITEM_SUCCESS';


export const updateCartItem = (data) => ({
    type: UPDATE_CART_ITEM,
    payload: data
});
