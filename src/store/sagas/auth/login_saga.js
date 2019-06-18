import {put, takeLatest, call} from 'redux-saga/effects';
import customerService from "../../../services/customerService";
import {
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SET_USER_DATA
}
    from "../../actions/auth";
import {
    SHOW_TOAST,
    HIDE_AUTH
}
    from "../../actions/alerts";

function* loginSaga (action) {
    try {
        const data = yield call(customerService.signIn, action.payload);

        yield put({
            type: SET_USER_DATA,
            payload: data
        });

        yield put({
            type: LOGIN_SUCCESS,
            payload: data
        });

        yield put({
            type: SHOW_TOAST,
            payload: {
                variant: 'success',
                message: 'Logged In Successfully!'
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
                message: error.data.error.message
            }
        });

        yield put({
            type: LOGIN_ERROR, payload: error.data.error.message
        });
    }
}


export function* loginSagaWatcher() {
    yield takeLatest(LOGIN_PENDING, loginSaga);
}