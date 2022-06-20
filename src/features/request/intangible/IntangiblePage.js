import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";

import { addComment, getRequestPage } from "../../../app/firebase";

export default function IntangiblePage() {
  const userId = useSelector((state) => state.user.userId); // is it necessary
  const [comment, setComment] = useState("");

  const params = useParams();
  const location = useLocation();
  const [request, setRequest] = useState({});
  const { title, description, tag: tagList, comment: commentList } = request;
  useEffect(() => {
    getRequestPage("intangible", params.requestId).then(setRequest);
  }, []);
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {tagList}
      <Link to={`${location.pathname}/edit`}>Edit</Link>

      {commentList?.map(({ userId, comment }) => (
        <div>
          {userId}
          {comment}
        </div>
      ))}
      <input
        type="text"
        placeholder="Comment"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      />
      <button
        onClick={() => {
          addComment("intangible", userId, params.requestId, comment);
          setComment("");
          // refresh page after adding comment
          // what if user: null
          // check if comment not empty
        }}
      >
        Send
      </button>
    </div>
  );
}
