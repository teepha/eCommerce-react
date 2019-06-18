import { all } from 'redux-saga/effects';
import { addToCartSagaWatcher } from './add_to_cart.saga';
import { deleteCartSagaWatcher } from './delete_cart.saga';
import { getCartItemsSagaWatcher } from './get_cart_items.saga';
import { removeFromCartSagaWatcher } from './remove_from_cart.saga';
import { updateCartItemSagaWatcher } from './update_cart_item.saga';

export default function* cartSaga() {
    yield all([
        addToCartSagaWatcher(),
        deleteCartSagaWatcher(),
        getCartItemsSagaWatcher(),
        removeFromCartSagaWatcher(),
        updateCartItemSagaWatcher()
    ]);
}