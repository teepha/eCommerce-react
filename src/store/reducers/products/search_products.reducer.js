import * as Actions from '../../actions/products';

const initialState = {
    data      : {
        rows: []
    },
    isLoading: false,
    error: false
};

const searchProductsReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.SEARCH_PRODUCTS:
        {
            return {
                ...state,
                isLoading: true,
                error: false
            };
        }
        case Actions.SEARCH_PRODUCTS_SUCCESS:
        {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            };
        }
        case Actions.SEARCH_PRODUCTS_ERROR:
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

export default searchProductsReducer;