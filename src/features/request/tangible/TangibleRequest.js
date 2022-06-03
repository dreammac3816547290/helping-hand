import { Link } from "react-router-dom";

export default function TangibleRequest({ request, isFollowed, changeFollow }) {
  const { id, title, description, dateTime } = request;
  return (
    <Link to={`/request/tangible/${id}`}>
      <div className="request-in-list">
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{dateTime}</p>
        <button onClick={changeFollow}>
          {isFollowed ? "Unfollow" : "Follow"}
        </button>
      </div>
    </Link>
  );
}
