import { combineReducers } from "redux";
import allCategories from "./all_categories.reducer";
import departmentCategories from "./department_categories.reducer";

const categories = combineReducers({ allCategories, departmentCategories });

export default categories;
