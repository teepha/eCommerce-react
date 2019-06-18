import * as Actions from '../../actions/cart';

const initialState = {
    data: {},
    isLoading: false,
    error: false
};

const updateCartItemReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.UPDATE_CART_ITEM: {
            return {
                ...state,
                isLoading: true,
                error: false
            };
        }
        case Actions.UPDATE_CART_ITEM_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            };
        }
        case Actions.UPDATE_CART_ITEM_ERROR: {
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

export default updateCartItemReducer;