import * as Actions from '../../actions';

const initialState = {
    data: {},
    isLoading: false,
    error: false
};

const addProductReviewReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.ADD_PRODUCT_REVIEW: {
            return {
                ...state,
                isLoading: true,
                error: false
            };
        }
        case Actions.ADD_PRODUCT_REVIEW_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            };
        }
        case Actions.ADD_PRODUCT_REVIEW_ERROR: {
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

export default addProductReviewReducer;