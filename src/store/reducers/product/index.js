import {combineReducers} from 'redux';
import item from './single_product.reducer';
import details from './product_details.reducer';
import locations from './product_locations.reducer';

const product = combineReducers({
    item,
    details,
    locations,
});

export default product;