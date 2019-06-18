import * as Actions from '../../actions/cart';

const initialState = {
    data: {},
    isLoading: false,
    error: false
};

const addToCartReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.ADD_TO_CART: {
            return {
                ...state,
                isLoading: true,
                error: false
            };
        }
        case Actions.ADD_TO_CART_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            };
        }
        case Actions.ADD_TO_CART_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        }
        case Actions.ADD_TO_CART_RESET: {
            return {
                ...initialState
            };
        }
        default: {
            return state;
        }
    }
};

export default addToCartReducer;