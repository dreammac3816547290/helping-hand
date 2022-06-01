import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Tangible() {
  const tangibleList = useSelector((state) => state.request.tangible.public);
  const tangibleRequestList = tangibleList.map((request) => (
    <Link to={`/request/tangible/${request.id}`}>
      <div className="request-in-list">
        <h1>{request.title}</h1>
        <p>{request.description}</p>
        <p>{request.dateTime}</p>
      </div>
    </Link>
  ));
  return tangibleRequestList;
}
