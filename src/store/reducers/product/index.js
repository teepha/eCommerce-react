import {combineReducers} from 'redux';
import item from './single_product.reducer';
import details from './product_details.reducer';
import locations from './product_locations.reducer';
import reviews from './product_reviews.reducer';
import addReview from './add_product_review.reducer';

const product = combineReducers({
    item,
    details,
    locations,
    reviews,
    addReview
});

export default product;