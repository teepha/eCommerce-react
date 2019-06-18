import {put, takeLatest, call} from 'redux-saga/effects';
import cartService from "../../../services/cartService";
import {
    UPDATE_CART_ITEM,
    UPDATE_CART_ITEM_SUCCESS,
    UPDATE_CART_ITEM_ERROR, GET_CART_ITEMS, ADD_TO_CART_SUCCESS
}
    from "../../actions/cart";
import {SHOW_TOAST} from "../../actions/alerts";

function* updateCartItemSaga(action) {
    try {
        const data = yield call(cartService.updateCartItemQuantity, action.payload);


        yield put({
            type: GET_CART_ITEMS,
            payload: data
        });

        yield put({
            type: UPDATE_CART_ITEM_SUCCESS,
            payload: data
        });

        yield put({
            type: SHOW_TOAST,
            payload: {
                variant: 'success',
                message: 'Item Quantity Successfully Updated'
            }
        });

    } catch (error) {
        yield put({
            type: UPDATE_CART_ITEM_ERROR, payload: error
        });
    }
}


export function* updateCartItemSagaWatcher() {
    yield takeLatest(UPDATE_CART_ITEM, updateCartItemSaga);
}