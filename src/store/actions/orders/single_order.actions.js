export const GET_SINGLE_ORDER = 'GET_SINGLE_ORDER';
export const GET_SINGLE_ORDER_ERROR = 'GET_SINGLE_ORDER_ERROR';
export const GET_SINGLE_ORDER_SUCCESS = 'GET_SINGLE_ORDER_SUCCESS';


export const getSingleOrder = (data) => ({
    type: GET_SINGLE_ORDER,
    payload: data
});
