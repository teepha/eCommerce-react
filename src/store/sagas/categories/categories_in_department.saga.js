import {put, takeLatest, call} from 'redux-saga/effects';
import categoriesService from "../../../services/categoriesService";
import {
    GET_CATEGORIES_IN_DEPARTMENT,
    GET_CATEGORIES_IN_DEPARTMENT_SUCCESS,
    GET_CATEGORIES_IN_DEPARTMENT_ERROR
}
    from "../../actions/categories";

function* getCategoriesInDepartmentSaga(action) {
    
    try {
        const data = yield call(categoriesService.getCategoriesInDepartment, action.payload);

        yield put({
            type: GET_CATEGORIES_IN_DEPARTMENT_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_CATEGORIES_IN_DEPARTMENT_ERROR, payload: error
        });
    }

}


export function* getCategoriesInDepartmentSagaWatcher() {
    yield takeLatest(GET_CATEGORIES_IN_DEPARTMENT, getCategoriesInDepartmentSaga);
}