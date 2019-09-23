import { combineReducers } from "redux";
import allAttributes from "./all_attributes.reducer";
import attributeValues from "./attribute_values.reducer";
import productAttributes from "./product_attributes.reducer";

const attributes = combineReducers({ allAttributes, attributeValues, productAttributes });

export default attributes;
