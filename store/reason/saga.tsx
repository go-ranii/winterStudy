import { put, takeLatest } from "redux-saga/effects";
import ReasonAction from "../reason/slice";
import ReasonData from "../../constants/reason";

function* getReasonString() {
  yield put(ReasonAction.getReasonStringSuccess(ReasonData));
}

export function* watchReason() {
  yield takeLatest(ReasonAction.getReasonString, getReasonString);
}
