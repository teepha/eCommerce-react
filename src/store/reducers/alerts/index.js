import {combineReducers} from 'redux';
import toast from './toast.reducer';
import cart from './cart.reducer';
import auth from './auth.reducer';

const alerts = combineReducers({
    toast,
    cart,
    auth
});

export default alerts;