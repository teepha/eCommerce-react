import { all } from 'redux-saga/effects';
import { getAllProductsWatcher } from './get_all_products.saga';
import { searchProductsWatcher } from './search_products.saga';
import { categoryProductsWatcher } from './category_products.saga';
import { departmentProductsWatcher } from './department_products.saga';

export default function* productsSaga() {
    yield all([
        getAllProductsWatcher(),
        searchProductsWatcher(),
        categoryProductsWatcher(),
        departmentProductsWatcher(),
    ]);
}