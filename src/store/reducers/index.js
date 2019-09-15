import {combineReducers} from 'redux';
import alerts from './alerts';
import products from './products';
import product from './product';
import departments from './departments';
import categories from './categories';
import attributes from './attributes';

const createReducer = (asyncReducers) =>
    combineReducers({
        alerts,
        attributes,
        products,
        product,
        departments,
        categories,
        ...asyncReducers
    });

export default createReducer;
