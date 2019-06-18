import {put, takeLatest, call} from 'redux-saga/effects';
import productsService from "../../../services/productsService";
import {
    GET_PRODUCT_LOCATIONS,
    GET_PRODUCT_LOCATIONS_SUCCESS,
    GET_PRODUCT_LOCATIONS_ERROR
}
    from "../../actions/product";

function* productLocationsSaga(action) {
    try {
        const data = yield call(productsService.getProductLocations, action.payload);
        yield put({
            type: GET_PRODUCT_LOCATIONS_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_PRODUCT_LOCATIONS_ERROR, payload: error
        });
    }
}


export function* getProductLocationsWatcher() {
    yield takeLatest(GET_PRODUCT_LOCATIONS, productLocationsSaga);
}