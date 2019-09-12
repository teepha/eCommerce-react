import { combineReducers } from "redux";
import all from "./all_departments.reducer";

const departments = combineReducers({ all });

export default departments;
