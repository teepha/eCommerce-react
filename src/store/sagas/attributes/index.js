import { all } from "redux-saga/effects";
import { getAllAttributesWatcher } from "./get_all_attributes.saga";
import { getAttributeValuesWatcher } from "./attribute_values.saga";

export default function* attributesSaga() {
  yield all([getAllAttributesWatcher(), getAttributeValuesWatcher()]);
}
