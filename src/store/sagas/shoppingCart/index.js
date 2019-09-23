import { all } from "redux-saga/effects";
import { generateUniqueCartWatcher } from "./generate_unique_cart.saga";
import { cartItemsWatcher } from "./shopping_cart.saga";

export default function* shoppingCartSaga() {
  yield all([
    generateUniqueCartWatcher(),
    cartItemsWatcher()
  ]);
}
