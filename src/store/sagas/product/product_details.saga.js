import {put, takeLatest, call} from 'redux-saga/effects';
import productsService from "../../../services/productsService";
import {
    GET_PRODUCT_DETAILS,
    GET_PRODUCT_DETAILS_SUCCESS,
    GET_PRODUCT_DETAILS_ERROR
}
    from "../../actions/product";

function* productDetailsSaga(action) {
    try {
        const data = yield call(productsService.getProductDetails, action.payload);
        yield put({
            type: GET_PRODUCT_DETAILS_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_PRODUCT_DETAILS_ERROR, payload: error
        });
    }
}


export function* getProductDetailsWatcher() {
    yield takeLatest(GET_PRODUCT_DETAILS, productDetailsSaga);
}