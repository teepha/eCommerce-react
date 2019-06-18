import { all } from 'redux-saga/effects';
import { getAllDepartmentsWatcher } from './get_all_departments.saga';
import { singleDepartmentSagaWatcher } from './single_category.saga';

export default function* departmentsSaga() {
    yield all([
        getAllDepartmentsWatcher(),
        singleDepartmentSagaWatcher()
    ]);
}