import { combineReducers } from "redux";
import user from "./customer.reducer";

const customer = combineReducers({ user });

export default customer;
