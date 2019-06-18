import {combineReducers} from 'redux';
import add from './add_to_cart.reducer';
import deleteCart from './delete_cart.reducer';
import items from './get_cart_items.reducer';
import removeItem from './remove_from_cart.reducer';
import updateItem from './update_cart_item.reducer';

const cart = combineReducers({
    add,
    deleteCart,
    items,
    removeItem,
    updateItem
});

export default cart;