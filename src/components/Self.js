import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Self() {
  const intangibleList = useSelector((state) =>
    state.request.intangible.public.filter(
      (request) => request.requesterId === state.user.userId
    )
  );
  const tangibleList = useSelector((state) =>
    state.request.tangible.public.filter(
      (request) => request.requesterId === state.user.userId
    )
  );
  return (
    <>
      <h1>Intangible</h1>
      {intangibleList.map((request) => (
        <Link to={`/request/intangible/${request.id}`}>
          <div className="request-in-list">
            <h1>{request.title}</h1>
            <p>{request.description}</p>
          </div>
        </Link>
      ))}
      <h1>Tangible</h1>
      {tangibleList.map((request) => (
        <Link to={`/request/tangible/${request.id}`}>
          <div className="request-in-list">
            <h1>{request.title}</h1>
            <p>{request.description}</p>
            <p>{request.dateTime}</p>
          </div>
        </Link>
      ))}
      <Link to="/add">
        <button>+</button>
      </Link>
    </>
  );
}
