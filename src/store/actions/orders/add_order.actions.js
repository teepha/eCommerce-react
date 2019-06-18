export const ADD_ORDER = 'ADD_ORDER';
export const ADD_ORDER_ERROR = 'ADD_ORDER_ERROR';
export const ADD_ORDER_SUCCESS = 'ADD_ORDER_SUCCESS';
export const ADD_ORDER_RESET = 'ADD_ORDER_RESET';


export const addOrder = (data) => ({
    type: ADD_ORDER,
    payload: data
});

export const addOrderReset = (data) => ({
    type: ADD_ORDER_RESET,
    payload: data
});
