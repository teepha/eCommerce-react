import {put, takeLatest, call} from 'redux-saga/effects';
import cartService from "../../../services/cartService";
import {
    DELETE_CART,
    DELETE_CART_SUCCESS,
    DELETE_CART_ERROR
}
    from "../../actions/cart";

function* deleteCartSaga(action) {
    try {
        const data = yield call(cartService.deleteCart, action.payload);
        yield put({
            type: DELETE_CART_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: DELETE_CART_ERROR, payload: error
        });
    }
}


export function* deleteCartSagaWatcher() {
    yield takeLatest(DELETE_CART, deleteCartSaga);
}