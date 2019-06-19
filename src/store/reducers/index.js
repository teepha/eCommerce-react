import {combineReducers} from 'redux';
import alerts from './alerts';
import products from './products';
import product from './product';

const createReducer = (asyncReducers) =>
    combineReducers({
        alerts,
        products,
        product,
        ...asyncReducers
    });

export default createReducer;
