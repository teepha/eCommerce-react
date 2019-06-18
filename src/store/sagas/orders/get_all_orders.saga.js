import {put, takeLatest, call} from 'redux-saga/effects';
import ordersService from "../../../services/ordersService";
import {
    GET_ALL_ORDERS,
    GET_ALL_ORDERS_SUCCESS,
    GET_ALL_ORDERS_ERROR
}
    from "../../actions/orders";

function* getAllOrdersSaga(action) {

    try {
        const data = yield call(ordersService.getAllOrders, action.payload);

        yield put({
            type: GET_ALL_ORDERS_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_ALL_ORDERS_ERROR, payload: error
        });
    }

}


export function* getAllOrdersSagaWatcher() {
    yield takeLatest(GET_ALL_ORDERS, getAllOrdersSaga);
}