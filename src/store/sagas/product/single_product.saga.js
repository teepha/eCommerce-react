import {put, takeLatest, call} from 'redux-saga/effects';
import productsService from "../../../services/productsService";
import {
    GET_SINGLE_PRODUCT,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR
}
    from "../../actions/product";

function* singleProductSaga(action) {
    try {
        const data = yield call(productsService.getProductById, action.payload);
        yield put({
            type: GET_SINGLE_PRODUCT_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_SINGLE_PRODUCT_ERROR, payload: error
        });
    }
}


export function* getSingleProductWatcher() {
    yield takeLatest(GET_SINGLE_PRODUCT, singleProductSaga);
}