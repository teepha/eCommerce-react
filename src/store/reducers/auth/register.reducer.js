import * as Actions from '../../actions/auth';

const initialState = {
    success: false,
    error  : false,
    isLoading: false
};

const register = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.REGISTER_SUCCESS:
        {
            return {
                ...initialState,
                success: true
            };
        }
        case Actions.REGISTER_PENDING:
        {
            return {
                ...initialState,
                isLoading: true
            };
        }
        case Actions.REGISTER_ERROR:
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

export default register;