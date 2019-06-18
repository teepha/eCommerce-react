import {combineReducers} from 'redux';
import all from './get_all_departments.reducer';
import item from './single_department.reducer';

const categories = combineReducers({
    all,
    item
});

export default categories;