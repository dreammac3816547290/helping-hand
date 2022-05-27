import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Tangible() {
  const tangibleList = useSelector((state) => state.request.tangible.public);
  return tangibleList.map((request) => (
    <Link to={`/request/tangible/${request.id}`}>
      <div>
        <h1>{request.title}</h1>
        <p>{request.description}</p>
      </div>
    </Link>
  ));
}
