import { all } from "redux-saga/effects";
import { watchFlow } from "./flow/saga";
import { watchReason } from "./reason/saga";

export default function* rootSaga() {
  yield all([watchFlow(), watchReason()]);
}
