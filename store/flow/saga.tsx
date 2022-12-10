import { put, takeLatest } from "redux-saga/effects";
import FlowAction from "./slice";
import FlowData from "../../constants/flow";

function* getFlowString() {
  yield put(FlowAction.getFlowStringSuccess(FlowData));
}

export function* watchFlow() {
  yield takeLatest(FlowAction.getFlowString, getFlowString);
}
