import {combineReducers} from 'redux';
import all from './get_all_orders.reducer';
import item from './single_order.reducer';
import add from './add_order.reducer';
import shipping from './get_all_shipping.reducer';

const categories = combineReducers({
    all,
    item,
    add,
    shipping
});

export default categories;