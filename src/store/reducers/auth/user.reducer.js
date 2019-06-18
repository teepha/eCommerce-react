import * as Actions from '../../actions/auth';

const initialState = {
    name: 'Guest User',
    email: 'guest@email.com',
    address: ''
};

const user = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.SET_USER_DATA:
        {
            return {
                ...initialState,
                ...action.payload
            };
        }
        case Actions.REMOVE_USER_DATA:
        {
            return {
                ...initialState
            };
        }
        default:
        {
            return state
        }
    }
};

export default user;
