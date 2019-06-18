import {combineReducers} from 'redux';
import all from './get_all_categories.reducer';
import departmentCategories from './categories_in_department.reducer';
import productCategories from './categories_of_product.reducer';
import item from './single_category.reducer';

const categories = combineReducers({
    all,
    departmentCategories,
    productCategories,
    item
});

export default categories;