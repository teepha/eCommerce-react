import {put, takeLatest, call} from 'redux-saga/effects';
import categoriesService from "../../../services/categoriesService";
import {
    GET_SINGLE_CATEGORY,
    GET_SINGLE_CATEGORY_SUCCESS,
    GET_SINGLE_CATEGORY_ERROR
}
    from "../../actions/categories";

function* singleCategorySaga(action) {
    
    try {
        const data = yield call(categoriesService.getCategoryById, action.payload);

        yield put({
            type: GET_SINGLE_CATEGORY_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_SINGLE_CATEGORY_ERROR, payload: error
        });
    }

}


export function* singleCategorySagaWatcher() {
    yield takeLatest(GET_SINGLE_CATEGORY, singleCategorySaga);
}