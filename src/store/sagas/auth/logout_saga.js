import {put, takeLatest, call} from 'redux-saga/effects';
import history from "../../../history";
import customerService from "../../../services/customerService";
import {
    REMOVE_USER_DATA
}
    from "../../actions/auth";
import {
    SHOW_TOAST
}
    from "../../actions/alerts";

function* logoutSaga (action) {
    try {
        yield call(customerService.logout, action.payload);

        history.push({
            pathname: '/'
        });

        yield put({
            type: SHOW_TOAST,
            payload: {
                variant: 'info',
                message: 'Logged out Successfully!'
            }
        });


    } catch (error) {
    }
}


export function* logoutSagaWatcher() {
    yield takeLatest(REMOVE_USER_DATA, logoutSaga);
}

