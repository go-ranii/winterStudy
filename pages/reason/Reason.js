import { useSelector } from "react-redux";

const Reason = () => {
  const { list } = useSelector((state) => state.reason);
  return (
    <div>
      <h1>사용 이유</h1>
      <p>{list.first}</p>
      <p>{list.second}</p>
      <p>{list.third}</p>
    </div>
  );
};

export default Reason;
