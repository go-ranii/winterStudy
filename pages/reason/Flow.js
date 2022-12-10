import { useSelector } from "react-redux";
import FlowAction from "../../store/flow/slice";
import { useDispatch } from "react-redux";

const Flow = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.flow);

  const reset = () => {
    dispatch(FlowAction.init());
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <p
          style={{
            height: "80px",
            marginLeft: "12px",
            border: "1px solid grey",
          }}
        >
          {list.first}
        </p>
        <p
          style={{
            height: "80px",
            marginLeft: "12px",
            border: "1px solid grey",
          }}
        >
          {list.second}
        </p>
        <p
          style={{
            height: "80px",
            marginLeft: "12px",
            border: "1px solid grey",
          }}
        >
          {list.third}
        </p>
        <p
          style={{
            height: "80px",
            marginLeft: "12px",
            border: "1px solid grey",
          }}
        >
          {list.fourth}
        </p>
      </div>
      <p>redux사용시 흐름도</p>
      <button onClick={reset}>초기화</button>
    </div>
  );
};

export default Flow;
