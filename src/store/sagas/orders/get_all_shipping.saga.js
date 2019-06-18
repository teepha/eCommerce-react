import {put, takeLatest, call} from 'redux-saga/effects';
import ordersService from "../../../services/ordersService";
import {
    GET_ALL_SHIPPING,
    GET_ALL_SHIPPING_SUCCESS,
    GET_ALL_SHIPPING_ERROR
}
    from "../../actions/orders";

function* getAllShippingSaga(action) {

    try {
        const data = yield call(ordersService.getShippingRegions, action.payload);

        yield put({
            type: GET_ALL_SHIPPING_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_ALL_SHIPPING_ERROR, payload: error
        });
    }

}


export function* getAllShippingSagaWatcher() {
    yield takeLatest(GET_ALL_SHIPPING, getAllShippingSaga);
}