import * as Actions from '../../actions';

const initialState = {
    open  : false,
    register: false
};

const auth = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.SHOW_AUTH:
        {
            return {
                open  : true,
                register: action.payload
            };
        }
        case Actions.HIDE_AUTH:
        {
            return {
                ...state,
                open: false,
                register: false
            };
        }
        case Actions.SWITCH_TAB:
        {
            return {
                ...state,
                register: action.payload
            };
        }
        default:
        {
            return state;
        }
    }
};

export default auth;
