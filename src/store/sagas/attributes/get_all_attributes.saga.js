import { put, takeLatest, call } from "redux-saga/effects";
import attributesService from "../../../services/attributesService";
import {
  GET_ALL_ATTRIBUTES,
  GET_ALL_ATTRIBUTES_ERROR,
  GET_ALL_ATTRIBUTES_SUCCESS
} from "../../actions/attributes";

function* getAllAttributesSaga(action) {
  try {
    const data = yield call(attributesService.getAllAttributes, action.payload);
    yield put({
      type: GET_ALL_ATTRIBUTES_SUCCESS,
      payload: data
    });
  } catch (error) {
    yield put({
      type: GET_ALL_ATTRIBUTES_ERROR,
      payload: error
    });
  }
}

export function* getAllAttributesWatcher() {
  yield takeLatest(GET_ALL_ATTRIBUTES, getAllAttributesSaga);
}
