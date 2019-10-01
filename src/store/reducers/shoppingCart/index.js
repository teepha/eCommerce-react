import { combineReducers } from "redux";
import uniqueCart from "./generate_cart.reducer";
import cart from "./shopping_cart.reducer";

const shoppingCart = combineReducers({ uniqueCart, cart });

export default shoppingCart;
