import {put, takeLatest, call} from 'redux-saga/effects';
import productsService from "../../../services/productsService";
import {SHOW_TOAST} from "../../actions/alerts";
import {
    ADD_PRODUCT_REVIEW,
    ADD_PRODUCT_REVIEW_SUCCESS,
    ADD_PRODUCT_REVIEW_ERROR
}
    from "../../actions/product";

function* addProductReviewSaga(action) {
    try {
        const data = yield call(productsService.createProductReview, action.payload);
        yield put({
            type: ADD_PRODUCT_REVIEW_SUCCESS,
            payload: data
        });

        yield put({
            type: SHOW_TOAST,
            payload: {
                variant: 'success',
                message: 'Review Added Successfully!'
            }
        });


    } catch (error) {
        yield put({
            type: ADD_PRODUCT_REVIEW_ERROR, payload: error
        });
    }
}


export function* addProductReviewWatcher() {
    yield takeLatest(ADD_PRODUCT_REVIEW, addProductReviewSaga);
}