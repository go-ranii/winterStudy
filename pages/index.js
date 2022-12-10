import { useState } from "react";
import Flow from "./reason/Flow";
import Reason from "./reason/Reason";
import wrapper from "../store/index";
import FlowAction from "../store/flow/slice";
import ReasonAction from "../store/reason/slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
  const [pageIndex, setPageIndex] = useState(-1);
  const { isSuccess } = useSelector((state) => state.flow);
  const { isSuccess: reasonIsSuccess } = useSelector((state) => state.reason);
  const getFlowData = () => {
    setPageIndex(2);
    if (!isSuccess) {
      dispatch(FlowAction.getFlowString());
    }
  };

  const getReasonData = () => {
    setPageIndex(1);
    if (!reasonIsSuccess) {
      dispatch(ReasonAction.getReasonString());
    }
  };
  return (
    <div>
      <h1>Redux Study</h1>
      <div style={{ display: "flex" }}>
        <button onClick={getReasonData}>Reason</button>
        <button onClick={getFlowData}>Flow</button>
        <button></button>
      </div>

      <div>
        {pageIndex === 1 && <Reason />} {pageIndex === 2 && <Flow />}
      </div>
    </div>
  );
};

const wrapperApp = wrapper.withRedux(Main);
export default wrapperApp;
