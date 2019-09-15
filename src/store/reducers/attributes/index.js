import { combineReducers } from "redux";
import allAttributes from "./all_attributes.reducer";
import attributeValues from "./attribute_values.reducer";

const attributes = combineReducers({ allAttributes, attributeValues });

export default attributes;
