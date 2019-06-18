import {combineReducers} from 'redux';
import all from './all_products.reducer';
import search from './search_products.reducer';
import byDepartment from './department_products.reducer';
import byCategory from './category_products.reducer';

const products = combineReducers({
    all,
    search,
    byDepartment,
    byCategory
});

export default products;