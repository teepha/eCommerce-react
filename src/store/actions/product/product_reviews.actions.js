export const GET_PRODUCT_REVIEWS = 'GET_PRODUCT_REVIEWS';
export const GET_PRODUCT_REVIEWS_ERROR = 'GET_PRODUCT_REVIEWS_ERROR';
export const GET_PRODUCT_REVIEWS_SUCCESS = 'GET_PRODUCT_REVIEWS_SUCCESS';


export const getProductReviews = (data) => ({
    type: GET_PRODUCT_REVIEWS,
    payload: data
});
