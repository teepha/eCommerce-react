export const ADD_PRODUCT_REVIEW = 'ADD_PRODUCT_REVIEW';
export const ADD_PRODUCT_REVIEW_ERROR = 'ADD_PRODUCT_REVIEW_ERROR';
export const ADD_PRODUCT_REVIEW_SUCCESS = 'ADD_PRODUCT_REVIEW_SUCCESS';


export const addProductReview = (data) => ({
    type: ADD_PRODUCT_REVIEW,
    payload: data
});
