export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const SEARCH_PRODUCTS_ERROR = 'SEARCH_PRODUCTS_ERROR';
export const SEARCH_PRODUCTS_SUCCESS = 'SEARCH_PRODUCTS_SUCCESS';


export const searchProducts = (data) => ({
    type: SEARCH_PRODUCTS,
    payload: data
});

