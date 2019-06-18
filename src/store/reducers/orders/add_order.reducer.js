import * as Actions from '../../actions/orders';

const initialState = {
    data: [],
    isLoading: false,
    error: false
};

const addOrderReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.ADD_ORDER: {
            return {
                ...state,
                isLoading: true,
                error: false
            };
        }
        case Actions.ADD_ORDER_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            };
        }
        case Actions.ADD_ORDER_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        }
        case Actions.ADD_ORDER_RESET: {
            return {
                ...initialState
            };
        }
        default: {
            return state;
        }
    }
};

export default addOrderReducer;