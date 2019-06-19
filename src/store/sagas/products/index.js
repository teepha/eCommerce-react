import { all } from 'redux-saga/effects';
import { getAllProductsWatcher } from './get_all_products.saga';

export default function* productsSaga() {
    yield all([
        getAllProductsWatcher()
    ]);
}