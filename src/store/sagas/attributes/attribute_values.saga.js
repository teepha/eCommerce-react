import { put, takeLatest, call } from "redux-saga/effects";
import attributesService from "../../../services/attributesService";
import {
  GET_ATTRIBUTE_VALUES,
  GET_ATTRIBUTE_VALUES_ERROR,
  GET_ATTRIBUTE_VALUES_SUCCESS
} from "../../actions/attributes";

function* getAttributeValuesSaga(action) {
  try {
    const data = yield call(
      attributesService.getAttributeValues,
      action.payload
    );
    yield put({
      type: GET_ATTRIBUTE_VALUES_SUCCESS,
      payload: data
    });
  } catch (error) {
    yield put({
      type: GET_ATTRIBUTE_VALUES_ERROR,
      payload: error
    });
  }
}

export function* getAttributeValuesWatcher() {
  yield takeLatest(GET_ATTRIBUTE_VALUES, getAttributeValuesSaga);
}
