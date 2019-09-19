import { put, takeLatest, call } from "redux-saga/effects";
import shoppingCartService from "../../../services/shoppingCartService";
import {
  GET_CART_ITEMS,
  GET_CART_ITEMS_SUCCESS,
  GET_CART_ITEMS_ERROR
} from "../../actions/shoppingCart";

function* getCartItemsSaga(action) {
  try {
    const data = yield call(shoppingCartService.getCart, action.payload);
    yield put({
      type: GET_CART_ITEMS_SUCCESS,
      payload: data
    });
  } catch (error) {
    yield put({
      type: GET_CART_ITEMS_ERROR,
      payload: error
    });
  }
}

export function* getCartItemsWatcher() {
  yield takeLatest(GET_CART_ITEMS, getCartItemsSaga);
}
