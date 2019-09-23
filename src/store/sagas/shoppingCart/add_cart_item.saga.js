import { put, takeLatest, call } from "redux-saga/effects";
import shoppingCartService from "../../../services/shoppingCartService";
import {
  ADD_CART_ITEM,
  ADD_CART_ITEM_SUCCESS,
  ADD_CART_ITEM_ERROR
} from "../../actions/shoppingCart";

function* addCartItemSaga(action) {
  try {
    const data = yield call(shoppingCartService.addItemToCart, action.payload);
    yield put({
      type: ADD_CART_ITEM_SUCCESS,
      payload: data
    });
  } catch (error) {
    yield put({
      type: ADD_CART_ITEM_ERROR,
      payload: error
    });
  }
}

export function* addCartItemWatcher() {
  yield takeLatest(ADD_CART_ITEM, addCartItemSaga);
}
