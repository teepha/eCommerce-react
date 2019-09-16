import { put, takeLatest, call } from "redux-saga/effects";
import attributesService from "../../../services/attributesService";
import {
  GET_PRODUCT_ATTRIBUTES,
  GET_PRODUCT_ATTRIBUTES_ERROR,
  GET_PRODUCT_ATTRIBUTES_SUCCESS
} from "../../actions/attributes";

function* getAttributesInProductSaga(action) {
  try {
    const data = yield call(
      attributesService.getAttributesInProduct,
      action.payload
    );
    yield put({
      type: GET_PRODUCT_ATTRIBUTES_SUCCESS,
      payload: data
    });
  } catch (error) {
    yield put({
      type: GET_PRODUCT_ATTRIBUTES_ERROR,
      payload: error
    });
  }
}

export function* getAttributesInProductWatcher() {
  yield takeLatest(GET_PRODUCT_ATTRIBUTES, getAttributesInProductSaga);
}
