import * as Actions from '../../actions/orders';

const initialState = {
    data      : {},
    isLoading: false,
    error: false
};

const singleOrderReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_SINGLE_ORDER:
        {
            return {
                ...state,
                isLoading: true,
                error: false
            };
        }
        case Actions.GET_SINGLE_ORDER_SUCCESS:
        {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            };
        }
        case Actions.GET_SINGLE_ORDER_ERROR:
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

export default singleOrderReducer;