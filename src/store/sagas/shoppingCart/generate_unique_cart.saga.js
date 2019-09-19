import { put, takeLatest, call } from "redux-saga/effects";
import shoppingCartService from "../../../services/shoppingCartService";
import {
  GENERATE_UNIQUE_CART,
  GENERATE_UNIQUE_CART_SUCCESS,
  GENERATE_UNIQUE_CART_ERROR
} from "../../actions/shoppingCart";

function* generateUniqueCartSaga(action) {
  try {
    const data = yield call(
      shoppingCartService.generateUniqueCart,
      action.payload
    );
    yield put({
      type: GENERATE_UNIQUE_CART_SUCCESS,
      payload: data
    });
  } catch (error) {
    yield put({
      type: GENERATE_UNIQUE_CART_ERROR,
      payload: error
    });
  }
}

export function* generateUniqueCartWatcher() {
  yield takeLatest(GENERATE_UNIQUE_CART, generateUniqueCartSaga);
}
