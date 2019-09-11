import { all } from "redux-saga/effects";
import { getAllDepartmentsWatcher } from "./get_all_departments.saga";

export default function* departmentsSaga() {
  yield all([getAllDepartmentsWatcher()]);
}
