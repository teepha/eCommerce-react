import { combineReducers } from "redux";
import uniqueCart from "./generate_cart.reducer";
import getCart from "./get_cart.reducer";
import addCartItem from "./add_cart_item.reducer";
import totalAmount from "./get_total_amount.reducer";

const shoppingCart = combineReducers({ uniqueCart, getCart, addCartItem, totalAmount });

export default shoppingCart;
