import {combineReducers} from 'redux';
import all from './all_products.reducer';


const products = combineReducers({
    all,
});

export default products;