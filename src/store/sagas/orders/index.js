import { all } from 'redux-saga/effects';
import { getAllOrdersSagaWatcher } from './get_all_orders.saga';
import { singleOrderSagaWatcher } from './single_order.saga';
import { addOrderSagaWatcher } from './add_order.saga';
import { getAllShippingSagaWatcher } from './get_all_shipping.saga';

export default function* categoriesSaga() {
    yield all([
        getAllOrdersSagaWatcher(),
        singleOrderSagaWatcher(),
        addOrderSagaWatcher(),
        getAllShippingSagaWatcher()
    ]);
}