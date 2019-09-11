import { all } from "redux-saga/effects";
import { getDepartmentCategoriesWatcher } from "./department_categories.saga";
import { getAllCategoriesWatcher } from "./get_all_categories.saga";

export default function* categoriesSaga() {
  yield all([getDepartmentCategoriesWatcher(), getAllCategoriesWatcher()]);
}
