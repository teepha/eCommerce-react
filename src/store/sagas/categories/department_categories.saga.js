import { put, takeLatest, call } from 'redux-saga/effects';
import categoriesService from "../../../services/categoriesService";
import {
  GET_DEPARTMENT_CATEGORIES,
  GET_DEPARTMENT_CATEGORIES_SUCCESS,
  GET_DEPARTMENT_CATEGORIES_ERROR
}
  from "../../actions/categories";

function* getDepartmentCategoriesSaga(action) {
  try {
    const data = yield call(categoriesService.getDepartmentCategories, action.payload);
    yield put({
      type: GET_DEPARTMENT_CATEGORIES_SUCCESS,
      payload: data
    });

  } catch (error) {
    yield put({
      type: GET_DEPARTMENT_CATEGORIES_ERROR, payload: error
    });
  }
}


export function* getDepartmentCategoriesWatcher() {
  yield takeLatest(GET_DEPARTMENT_CATEGORIES, getDepartmentCategoriesSaga);
}
