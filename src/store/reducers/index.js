import {combineReducers} from 'redux';
import alerts from './alerts';
import categories from './categories';
import departments from './departments';
import products from './products';
import product from './product';
import cart from './cart';
import auth from './auth';
import orders from './orders';

const createReducer = (asyncReducers) =>
    combineReducers({
        alerts,
        categories,
        departments,
        products,
        product,
        cart,
        auth,
        orders,
        ...asyncReducers
    });

export default createReducer;
