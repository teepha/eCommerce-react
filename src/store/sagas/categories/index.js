import { all } from 'redux-saga/effects';
import { getAllCategoriesWatcher } from './get_all_categories.saga';
import { getCategoriesInDepartmentSagaWatcher } from './categories_in_department.saga';
import { categoriesOfProductSagaWatcher } from './categories_of_product.saga';
import { singleCategorySagaWatcher } from './single_category.saga';

export default function* categoriesSaga() {
    yield all([
        getAllCategoriesWatcher(),
        getCategoriesInDepartmentSagaWatcher(),
        categoriesOfProductSagaWatcher(),
        singleCategorySagaWatcher()
    ]);
}