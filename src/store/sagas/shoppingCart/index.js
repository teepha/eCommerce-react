import { all } from "redux-saga/effects";
import { generateUniqueCartWatcher } from "./generate_unique_cart.saga";
import { getCartItemsWatcher } from "./get_cart.saga";
import { addCartItemWatcher } from "./add_cart_item.saga";
import { getTotalAmountWatcher } from "./get_total_amount.saga";

export default function* shoppingCartSaga() {
  yield all([
    generateUniqueCartWatcher(),
    getCartItemsWatcher(),
    addCartItemWatcher(),
    getTotalAmountWatcher()
  ]);
}
