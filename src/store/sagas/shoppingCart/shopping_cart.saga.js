import { put, takeLatest, call } from "redux-saga/effects";
import shoppingCartService from "../../../services/shoppingCartService";
import {
  GET_CART_ITEMS,
  GET_CART_ITEMS_SUCCESS,
  GET_CART_ITEMS_ERROR,
  ADD_CART_ITEM,
  ADD_CART_ITEM_SUCCESS,
  ADD_CART_ITEM_ERROR,
  GET_TOTAL_AMOUNT,
  GET_TOTAL_AMOUNT_SUCCESS,
  GET_TOTAL_AMOUNT_ERROR
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

function* getTotalAmountSaga(action) {
  try {
    const data = yield call(shoppingCartService.getTotalAmount, action.payload);
    yield put({
      type: GET_TOTAL_AMOUNT_SUCCESS,
      payload: data
    });
  } catch (error) {
    yield put({
      type: GET_TOTAL_AMOUNT_ERROR,
      payload: error
    });
  }
}

export function* cartItemsWatcher() {
  yield takeLatest(GET_CART_ITEMS, getCartItemsSaga);
  yield takeLatest(ADD_CART_ITEM, addCartItemSaga);
  yield takeLatest(GET_TOTAL_AMOUNT, getTotalAmountSaga);
}
