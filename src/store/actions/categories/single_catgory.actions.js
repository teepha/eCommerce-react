export const GET_SINGLE_CATEGORY = 'GET_SINGLE_CATEGORY';
export const GET_SINGLE_CATEGORY_ERROR = 'GET_SINGLE_CATEGORY_ERROR';
export const GET_SINGLE_CATEGORY_SUCCESS = 'GET_SINGLE_CATEGORY_SUCCESS';


export const getSingleCategory = (data) => ({
    type: GET_SINGLE_CATEGORY,
    payload: data
});
