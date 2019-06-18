import {put, takeLatest, call} from 'redux-saga/effects';
import categoriesService from "../../../services/categoriesService";
import {
    GET_CATEGORIES_OF_PRODUCT,
    GET_CATEGORIES_OF_PRODUCT_SUCCESS,
    GET_CATEGORIES_OF_PRODUCT_ERROR
}
    from "../../actions/categories";

function* categoriesOfProductSaga(action) {
    
    try {
        const data = yield call(categoriesService.getCategoriesOfProduct, action.payload);

        yield put({
            type: GET_CATEGORIES_OF_PRODUCT_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_CATEGORIES_OF_PRODUCT_ERROR, payload: error
        });
    }

}


export function* categoriesOfProductSagaWatcher() {
    yield takeLatest(GET_CATEGORIES_OF_PRODUCT, categoriesOfProductSaga);
}