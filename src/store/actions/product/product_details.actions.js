export const GET_PRODUCT_DETAILS = 'GET_PRODUCT_DETAILS';
export const GET_PRODUCT_DETAILS_ERROR = 'GET_PRODUCT_DETAILS_ERROR';
export const GET_PRODUCT_DETAILS_SUCCESS = 'GET_PRODUCT_DETAILS_SUCCESS';


export const getProductDetails = (data) => ({
    type: GET_PRODUCT_DETAILS,
    payload: data
});
