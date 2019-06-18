import {put, takeLatest, call} from 'redux-saga/effects';
import productsService from "../../../services/productsService";
import {
    GET_DEPARTMENT_PRODUCTS,
    GET_DEPARTMENT_PRODUCTS_SUCCESS,
    GET_DEPARTMENT_PRODUCTS_ERROR
}
    from "../../actions/products";

function* departmentProductsSaga(action) {

    try {
        const data = yield call(productsService.getProductsInDepartment, action.payload);
        yield put({
            type: GET_DEPARTMENT_PRODUCTS_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_DEPARTMENT_PRODUCTS_ERROR, payload: error
        });
    }

}


export function* departmentProductsWatcher() {
    yield takeLatest(GET_DEPARTMENT_PRODUCTS, departmentProductsSaga);
}