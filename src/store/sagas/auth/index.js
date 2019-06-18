import { all } from 'redux-saga/effects';
import { loginSagaWatcher } from './login_saga';
import { registerSagaWatcher } from './register_saga';
import { logoutSagaWatcher } from './logout_saga';

export default function* cartSaga() {
    yield all([
        loginSagaWatcher(),
        registerSagaWatcher(),
        logoutSagaWatcher()
    ]);
}