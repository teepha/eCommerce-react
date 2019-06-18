import {put, takeLatest, call} from 'redux-saga/effects';
import cartService from "../../../services/cartService";
import {
    GET_CART_ITEMS,
    GET_CART_ITEMS_SUCCESS,
    GET_CART_ITEMS_ERROR
}
    from "../../actions/cart";

function* getCartItemsSaga(action) {
    try {
        const data = yield call(cartService.getCartItems, action.payload);
        yield put({
            type: GET_CART_ITEMS_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_CART_ITEMS_ERROR, payload: error
        });
    }
}


export function* getCartItemsSagaWatcher() {
    yield takeLatest(GET_CART_ITEMS, getCartItemsSaga);
}