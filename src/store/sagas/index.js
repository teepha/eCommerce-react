import {all} from 'redux-saga/effects';
import categoriesSaga from './categories';
import departmentsSaga from './departments';
import productsSaga from './products';
import productSaga from './product';
import authSaga from './auth';
import ordersSaga from './orders';

export default function* rootSaga() {
    yield all([
        categoriesSaga(),
        productsSaga(),
        productSaga(),
        departmentsSaga(),
        authSaga(),
        ordersSaga()
    ]);
}
