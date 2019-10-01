import {all} from 'redux-saga/effects';
import productsSaga from './products';
import productSaga from './product';
import departmentsSaga from "./departments";
import categoriesSaga from './categories';
import attributesSaga from './attributes';
import shoppingCartSaga from './shoppingCart';
import customerSaga from './customer';

export default function* rootSaga() {
    yield all([
        productsSaga(),
        productSaga(),
        departmentsSaga(),
        categoriesSaga(),
        attributesSaga(),
        shoppingCartSaga(),
        customerSaga()
    ]);
}
