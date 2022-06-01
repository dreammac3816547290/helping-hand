import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Intangible() {
  const intangibleList = useSelector(
    (state) => state.request.intangible.public
  );
  const intangibleRequestList = intangibleList.map((request) => (
    <Link to={`/request/intangible/${request.id}`}>
      <div className="request-in-list">
        <h1>{request.title}</h1>
        <p>{request.description}</p>
        <button onClick={() => {}}>Follow</button>
      </div>
    </Link>
  ));
  return intangibleRequestList;
}
