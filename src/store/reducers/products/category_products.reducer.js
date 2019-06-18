import * as Actions from '../../actions/products';

const initialState = {
    data      : {
        rows: []
    },
    isLoading: false,
    error: false
};

const categoryProductsReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_CATEGORY_PRODUCTS:
        {
            return {
                ...state,
                isLoading: true,
                error: false
            };
        }
        case Actions.GET_CATEGORY_PRODUCTS_SUCCESS:
        {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            };
        }
        case Actions.GET_CATEGORY_PRODUCTS_ERROR:
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

export default categoryProductsReducer;