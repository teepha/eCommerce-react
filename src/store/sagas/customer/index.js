import { all } from "redux-saga/effects";
import { customerWatcher } from "./customer.saga";

export default function* customerSaga() {
  yield all([customerWatcher()]);
}
