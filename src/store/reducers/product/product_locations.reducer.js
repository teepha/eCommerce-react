import * as Actions from '../../actions';

const initialState = {
    data: {},
    isLoading: false,
    error: false
};

const productLocationsReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_PRODUCT_LOCATIONS: {
            return {
                ...state,
                isLoading: true,
                error: false
            };
        }
        case Actions.GET_PRODUCT_LOCATIONS_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            };
        }
        case Actions.GET_PRODUCT_LOCATIONS_ERROR: {
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

export default productLocationsReducer;