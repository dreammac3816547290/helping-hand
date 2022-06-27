import { useState } from "react";
import { useSelector } from "react-redux";

import { addComment } from "../app/firebase";

export default function Comment({ type, requestId, commentList }) {
  const userId = useSelector((state) => state.user.userId); // is it necessary
  const [comment, setComment] = useState("");
  return (
    <div className="comment">
      {commentList?.map(({ userId, comment }) => (
        <div>
          {userId}
          {comment}
          <hr />
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
          addComment(type, userId, requestId, comment);
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
