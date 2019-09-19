import { put, takeLatest, call } from "redux-saga/effects";
import shoppingCartService from "../../../services/shoppingCartService";
import {
  GET_TOTAL_AMOUNT,
  GET_TOTAL_AMOUNT_SUCCESS,
  GET_TOTAL_AMOUNT_ERROR
} from "../../actions/shoppingCart";

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

export function* getTotalAmountWatcher() {
  yield takeLatest(GET_TOTAL_AMOUNT, getTotalAmountSaga);
}
