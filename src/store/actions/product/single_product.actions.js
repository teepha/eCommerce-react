export const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT';
export const GET_SINGLE_PRODUCT_ERROR = 'GET_SINGLE_PRODUCT_ERROR';
export const GET_SINGLE_PRODUCT_SUCCESS = 'GET_SINGLE_PRODUCT_SUCCESS';


export const getSingleProduct = (data) => ({
    type: GET_SINGLE_PRODUCT,
    payload: data
});
