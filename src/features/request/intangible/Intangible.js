import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Intangible() {
  const intangibleList = useSelector(
    (state) => state.request.intangible.public
  );
  const intangibleRequestList = intangibleList.map((request) => (
    <Link to={`/request/intangible/${request.id}`}>
      <div>
        <h1>{request.title}</h1>
        <p>{request.description}</p>
      </div>
    </Link>
  ));
  return intangibleRequestList;
}
