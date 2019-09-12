import { put, takeLatest, call } from "redux-saga/effects";
import departmentsService from "../../../services/departmentsService";
import {
  GET_ALL_DEPARTMENTS,
  GET_ALL_DEPARTMENTS_SUCCESS,
  GET_ALL_DEPARTMENTS_ERROR
} from "../../actions/departments";

function* getAllDepartmentsSaga(action) {
  try {
    const data = yield call(
      departmentsService.getAllDepartments,
      action.payload
    );
    yield put({
      type: GET_ALL_DEPARTMENTS_SUCCESS,
      payload: data
    });
  } catch (error) {
    yield put({
      type: GET_ALL_DEPARTMENTS_ERROR,
      payload: error
    });
  }
}

export function* getAllDepartmentsWatcher() {
  yield takeLatest(GET_ALL_DEPARTMENTS, getAllDepartmentsSaga)
}
