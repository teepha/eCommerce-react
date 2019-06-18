import * as Actions from '../../actions/cart';

const initialState = {
    data: {},
    isLoading: false,
    error: false
};

const removeFromCartReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.REMOVE_FROM_CART: {
            return {
                ...state,
                isLoading: true,
                error: false
            };
        }
        case Actions.REMOVE_FROM_CART_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            };
        }
        case Actions.REMOVE_FROM_CART_ERROR: {
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

export default removeFromCartReducer;