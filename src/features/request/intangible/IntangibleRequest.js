import { Link } from "react-router-dom";

export default function IntangibleRequest({
  request,
  isFollowed,
  changeFollow,
}) {
  const { id, title, description, tag: tagList } = request;
  return (
    <Link to={`/request/intangible/${id}`}>
      <div className="request-in-list">
        <h1>{title}</h1>
        <p>{description}</p>
        {tagList}
        <button onClick={changeFollow}>
          {isFollowed ? "Unfollow" : "Follow"}
        </button>
      </div>
    </Link>
  );
}
