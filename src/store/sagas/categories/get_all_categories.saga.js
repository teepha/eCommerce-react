import {put, takeLatest, call} from 'redux-saga/effects';
import categoriesService from "../../../services/categoriesService";
import {
    GET_ALL_CATEGORIES,
    GET_ALL_CATEGORIES_SUCCESS,
    GET_ALL_CATEGORIES_ERROR
}
    from "../../actions/categories";

function* getAllCategoriesSaga(action) {
    try {
        const data = yield call(categoriesService.getAllCategories, action.payload);

        yield put({
            type: GET_ALL_CATEGORIES_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_ALL_CATEGORIES_ERROR, payload: error
        });
    }

}


export function* getAllCategoriesWatcher() {
    yield takeLatest(GET_ALL_CATEGORIES, getAllCategoriesSaga);
}