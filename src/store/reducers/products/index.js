import {combineReducers} from 'redux';
import all from './all_products.reducer';
import search from './search_products.reducer';

const products = combineReducers({
    all,
    search
});

export default products;