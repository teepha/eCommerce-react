import {put, takeLatest, call} from 'redux-saga/effects';
import departmentsService from "../../../services/departmentsService";
import {
    GET_SINGLE_DEPARTMENT,
    GET_SINGLE_DEPARTMENT_SUCCESS,
    GET_SINGLE_DEPARTMENT_ERROR
}
    from "../../actions/departments";

function* singleDepartmentSaga(action) {
    
    try {
        const data = yield call(departmentsService.getDepartmentById, action.payload);

        yield put({
            type: GET_SINGLE_DEPARTMENT_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_SINGLE_DEPARTMENT_ERROR, payload: error
        });
    }

}


export function* singleDepartmentSagaWatcher() {
    yield takeLatest(GET_SINGLE_DEPARTMENT, singleDepartmentSaga);
}