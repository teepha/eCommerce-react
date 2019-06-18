import {put, takeLatest, call} from 'redux-saga/effects';
import productsService from "../../../services/productsService";
import {
    SEARCH_PRODUCTS,
    SEARCH_PRODUCTS_SUCCESS,
    SEARCH_PRODUCTS_ERROR
}
    from "../../actions/products";

function* searchProductsSaga(action) {

    try {
        const data = yield call(productsService.searchProducts, action.payload);
        yield put({
            type: SEARCH_PRODUCTS_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: SEARCH_PRODUCTS_ERROR, payload: error
        });
    }

}


export function* searchProductsWatcher() {
    yield takeLatest(SEARCH_PRODUCTS, searchProductsSaga);
}