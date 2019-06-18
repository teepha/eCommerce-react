import {put, takeLatest, call} from 'redux-saga/effects';
import cartService from "../../../services/cartService";
import {
    REMOVE_FROM_CART,
    REMOVE_FROM_CART_SUCCESS,
    REMOVE_FROM_CART_ERROR, GET_CART_ITEMS
}
    from "../../actions/cart";
import {SHOW_TOAST} from "../../actions/alerts";

function* removeFromCartSaga(action) {
    try {
        const data = yield call(cartService.removeItemFromCart, action.payload);

        yield put({
            type: GET_CART_ITEMS,
            payload: data
        });

        yield put({
            type: REMOVE_FROM_CART_SUCCESS,
            payload: data
        });

        yield put({
            type: SHOW_TOAST,
            payload: {
                variant: 'info',
                message: 'Item Removed from Cart'
            }
        });

    } catch (error) {
        yield put({
            type: REMOVE_FROM_CART_ERROR, payload: error
        });
    }
}


export function* removeFromCartSagaWatcher() {
    yield takeLatest(REMOVE_FROM_CART, removeFromCartSaga);
}