import {put, takeLatest, call} from 'redux-saga/effects';
import productsService from "../../../services/productsService";
import {
    GET_ALL_PRODUCTS,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_ERROR
}
    from "../../actions/products";

function* getAllProductsSaga(action) {
    try {
        const data = yield call(productsService.getAllProducts, action.payload);
        yield put({
            type: GET_ALL_PRODUCTS_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_ALL_PRODUCTS_ERROR, payload: error
        });
    }
}


export function* getAllProductsWatcher() {
    yield takeLatest(GET_ALL_PRODUCTS, getAllProductsSaga);
}