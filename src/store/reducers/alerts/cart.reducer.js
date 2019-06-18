import * as Actions from '../../actions/index';

const initialState = {
    open  : false
};

const cart = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.SHOW_CART:
        {
            return {
                open  : true,
            };
        }
        case Actions.HIDE_CART:
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

export default cart;
