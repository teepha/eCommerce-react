import * as Actions from '../../actions/index';

const initialState = {
    open  : false,
    options: {
        timeout: 6000,
        message: "Hi",
        variant: null
    }
};

const toast = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.SHOW_TOAST:
        {
            return {
                open  : true,
                options: {
                    ...initialState.options,
                    ...action.payload
                }
            };
        }
        case Actions.HIDE_TOAST:
        {
            return {
                ...state,
                open: false
            };
        }
        default:
        {
            return state;
        }
    }
};

export default toast;
