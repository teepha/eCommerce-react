import {put, takeLatest, call} from 'redux-saga/effects';
import productsService from "../../../services/productsService";
import {
    GET_PRODUCT_REVIEWS,
    GET_PRODUCT_REVIEWS_SUCCESS,
    GET_PRODUCT_REVIEWS_ERROR
}
    from "../../actions/product";

function* productReviewsSaga(action) {
    try {
        const data = yield call(productsService.getProductReviews, action.payload);
        yield put({
            type: GET_PRODUCT_REVIEWS_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_PRODUCT_REVIEWS_ERROR, payload: error
        });
    }
}


export function* getProductReviewsWatcher() {
    yield takeLatest(GET_PRODUCT_REVIEWS, productReviewsSaga);
}