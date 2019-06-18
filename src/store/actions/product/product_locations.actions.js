export const GET_PRODUCT_LOCATIONS = 'GET_PRODUCT_LOCATIONS';
export const GET_PRODUCT_LOCATIONS_ERROR = 'GET_PRODUCT_LOCATIONS_ERROR';
export const GET_PRODUCT_LOCATIONS_SUCCESS = 'GET_PRODUCT_LOCATIONS_SUCCESS';


export const getProductLocations = (data) => ({
    type: GET_PRODUCT_LOCATIONS,
    payload: data
});
