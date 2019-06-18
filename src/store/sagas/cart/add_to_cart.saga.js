import {put, takeLatest, call} from 'redux-saga/effects';
import cartService from "../../../services/cartService";
import {
    ADD_TO_CART,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_ERROR,
    GET_CART_ITEMS
}
    from "../../actions/cart";
import {
    SHOW_TOAST
}
    from "../../actions/alerts";

function* addToCartSaga(action) {
    try {
        const data = yield call(cartService.addToCart, action.payload);

        yield put({
            type: GET_CART_ITEMS,
            payload: data
        });

        yield put({
            type: ADD_TO_CART_SUCCESS,
            payload: data
        });

        yield put({
            type: SHOW_TOAST,
            payload: {
                variant: 'success',
                message: 'Item Successfully Added to Cart'
            }
        });

    } catch (error) {
        yield put({
            type: ADD_TO_CART_ERROR, payload: error
        });
    }
}


export function* addToCartSagaWatcher() {
    yield takeLatest(ADD_TO_CART, addToCartSaga);
}