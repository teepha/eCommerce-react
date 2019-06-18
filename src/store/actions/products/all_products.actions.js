export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_ALL_PRODUCTS_ERROR = 'GET_ALL_PRODUCTS_ERROR';
export const GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';


export const getAllProducts = (data) => ({
    type: GET_ALL_PRODUCTS,
    payload: data
});
