import { all } from 'redux-saga/effects';
import { getSingleProductWatcher } from './single_product.saga';
import { getProductDetailsWatcher } from './product_details.saga';
import { getProductLocationsWatcher } from './product_locations.saga';
import { getProductReviewsWatcher } from './product_reviews.saga';
import { addProductReviewWatcher } from './add_product_review.saga';

export default function* productsSaga() {
    yield all([
        getSingleProductWatcher(),
        getProductDetailsWatcher(),
        getProductLocationsWatcher(),
        getProductReviewsWatcher(),
        addProductReviewWatcher()
    ]);
}