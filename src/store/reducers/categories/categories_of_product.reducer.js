import * as Actions from '../../actions';

const initialState = {
    data      : [],
    isLoading: false,
    error: false
};

const categoriesOfProductReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_CATEGORIES_OF_PRODUCT:
        {
            return {
                ...state,
                isLoading: true,
                error: false
            };
        }
        case Actions.GET_CATEGORIES_OF_PRODUCT_SUCCESS:
        {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            };
        }
        case Actions.GET_CATEGORIES_OF_PRODUCT_ERROR:
        {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        }
        default:
        {
            return state;
        }
    }
};

export default categoriesOfProductReducer;