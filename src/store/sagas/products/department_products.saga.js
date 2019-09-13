import { put, takeLatest, call } from "redux-saga/effects";
import productsService from "../../../services/productsService";
import {
  GET_DEPARTMENT_PRODUCTS,
  GET_DEPARTMENT_PRODUCTS_SUCCESS,
  GET_DEPARTMENT_PRODUCTS_ERROR
} from "../../actions/products";

function* getProductsInDepartmentSaga(action) {
  try {
    const data = yield call(
      productsService.getProductsInDepartment,
      action.payload
    );
    yield put({
      type: GET_DEPARTMENT_PRODUCTS_SUCCESS,
      payload: { ...data, ...action.payload }
    });
  } catch (error) {
    yield put({
      type: GET_DEPARTMENT_PRODUCTS_ERROR,
      payload: error
    });
  }
}

export function* getProductsInDepartmentWatcher() {
  yield takeLatest(
    GET_DEPARTMENT_PRODUCTS,
    getProductsInDepartmentSaga
  );
}
