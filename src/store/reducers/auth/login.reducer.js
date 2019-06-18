import * as Actions from '../../actions/auth';

const initialState = {
    success: false,
    error  : false,
    isLoading: false
};

const login = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.LOGIN_SUCCESS:
        {
            return {
                ...initialState,
                success: true
            };
        }
        case Actions.LOGIN_PENDING:
        {
            return {
                ...initialState,
                isLoading: true
            };
        }
        case Actions.LOGIN_ERROR:
        {
            return {
                ...initialState,
                error  : action.payload
            };
        }
        default:
        {
            return state
        }
    }
};

export default login;