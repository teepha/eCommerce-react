import * as Actions from '../../actions/orders';

const initialState = {
    data: [],
    isLoading: false,
    error: false
};

const allShippingReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_ALL_SHIPPING: {
            return {
                ...state,
                isLoading: true,
                error: false
            };
        }
        case Actions.GET_ALL_SHIPPING_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            };
        }
        case Actions.GET_ALL_SHIPPING_ERROR: {
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

export default allShippingReducer;