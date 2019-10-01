import { put, takeLatest, call } from "redux-saga/effects";
import customersService from "../../../services/customersService";
import {
  CREATE_NEW_CUSTOMER,
  CREATE_NEW_CUSTOMER_SUCCESS,
  CREATE_NEW_CUSTOMER_ERROR
} from "../../actions/customer";

function* createCustomerSaga(action) {
  try {
    const data = yield call(customersService.createCustomer, action.payload);
    yield put({
      type: CREATE_NEW_CUSTOMER_SUCCESS,
      payload: data
    });
  } catch (error) {
    yield put({
      type: CREATE_NEW_CUSTOMER_ERROR,
      payload: error
    });
  }
}

export function* customerWatcher() {
  yield takeLatest(CREATE_NEW_CUSTOMER, createCustomerSaga);
}
