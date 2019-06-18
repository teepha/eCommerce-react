import {put, takeLatest, call} from 'redux-saga/effects';
import ordersService from "../../../services/ordersService";
import {
    GET_SINGLE_ORDER,
    GET_SINGLE_ORDER_SUCCESS,
    GET_SINGLE_ORDER_ERROR
}
    from "../../actions/orders";

function* singleOrderSaga(action) {
    
    try {
        const data = yield call(ordersService.getOrderDetails, action.payload);

        yield put({
            type: GET_SINGLE_ORDER_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_SINGLE_ORDER_ERROR, payload: error
        });
    }

}


export function* singleOrderSagaWatcher() {
    yield takeLatest(GET_SINGLE_ORDER, singleOrderSaga);
}