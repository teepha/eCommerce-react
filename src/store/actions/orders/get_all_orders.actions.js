export const GET_ALL_ORDERS = 'GET_ALL_ORDERS';
export const GET_ALL_ORDERS_ERROR = 'GET_ALL_ORDERS_ERROR';
export const GET_ALL_ORDERS_SUCCESS = 'GET_ALL_ORDERS_SUCCESS';


export const getAllOrders = (data) => ({
    type: GET_ALL_ORDERS,
    payload: data
});
