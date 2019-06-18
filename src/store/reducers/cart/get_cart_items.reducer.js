import * as Actions from '../../actions/cart';

const initialState = {
    data: [],
    isLoading: false,
    error: false
};

const getCartItemsReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_CART_ITEMS: {
            return {
                ...state,
                isLoading: true,
                error: false
            };
        }
        case Actions.GET_CART_ITEMS_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            };
        }
        case Actions.GET_CART_ITEMS_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        }
        default: {
            return state;
        }
    }
};

export default getCartItemsReducer;