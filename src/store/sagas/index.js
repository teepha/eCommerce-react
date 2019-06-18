import {all} from 'redux-saga/effects';
import categoriesSaga from './categories';
import departmentsSaga from './departments';
import productsSaga from './products';
import productSaga from './product';
import cartSaga from './cart';
import authSaga from './auth';
import ordersSaga from './orders';

export default function* rootSaga() {
    yield all([
        categoriesSaga(),
        productsSaga(),
        productSaga(),
        cartSaga(),
        departmentsSaga(),
        authSaga(),
        ordersSaga()
    ]);
}
