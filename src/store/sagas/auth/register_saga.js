import {put, takeLatest, call} from 'redux-saga/effects';
import history from "../../../history";
import customerService from "../../../services/customerService";
import {
    REGISTER_PENDING,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    SET_USER_DATA
}
    from "../../actions/auth";
import {
    SHOW_TOAST,
    HIDE_AUTH
}
    from "../../actions/alerts";

function* registerSaga (action) {
    try {
        const data = yield call(customerService.register, action.payload);

        yield put({
            type: SET_USER_DATA,
            payload: data
        });

        yield put({
            type: REGISTER_SUCCESS,
            payload: data
        });

        yield put({
            type: SHOW_TOAST,
            payload: {
                variant: 'success',
                message: 'Registered Successfully!'
            }
        });

        yield put({
            type: HIDE_AUTH,
            payload: {
                variant: 'success',
                message: 'Logged In Successfully!'
            }
        });

    } catch (error) {

        yield put({
            type: SHOW_TOAST,
            payload: {
                variant: 'error',
                message: error.response.data.message
            }
        });

        yield put({
            type: REGISTER_ERROR, payload: error
        });
    }
}


export function* registerSagaWatcher() {
    yield takeLatest(REGISTER_PENDING, registerSaga);
}