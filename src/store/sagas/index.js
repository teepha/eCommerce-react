import {all} from 'redux-saga/effects';
import productsSaga from './products';
import productSaga from './product';

export default function* rootSaga() {
    yield all([
        productsSaga(),
        productSaga(),
    ]);
}
