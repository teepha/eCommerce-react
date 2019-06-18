export const GET_ALL_SHIPPING = 'GET_ALL_SHIPPING';
export const GET_ALL_SHIPPING_ERROR = 'GET_ALL_SHIPPING_ERROR';
export const GET_ALL_SHIPPING_SUCCESS = 'GET_ALL_SHIPPING_SUCCESS';


export const getAllShipping = (data) => ({
    type: GET_ALL_SHIPPING,
    payload: data
});
