import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addRequest, editRequest } from "../../../app/firebase";
import Tag from "../../../components/Tag";

export default function SetTangible({ previous }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState(previous?.title || "");
  const [description, setDescription] = useState(previous?.description || "");
  const [dateTime, setDateTime] = useState(previous?.dateTime || ""); // date now to string
  const [tagList, setTagList] = useState(previous?.tag || []);
  const userId = useSelector((state) => state.user.userId);
  const canAdd = userId && title && description && dateTime; // check userId, title, description, dateTime
  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <br />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <br />
      <input
        type="datetime-local"
        value={dateTime}
        onChange={(event) => setDateTime(event.target.value)}
      />
      <Tag tagList={tagList} setTagList={setTagList} />
      <button
        onClick={() => {
          if (canAdd) {
            const request = {
              requesterId: userId,
              title,
              description,
              dateTime,
              tag: tagList,
            };
            previous
              ? editRequest("tangible", previous.id, request)
              : addRequest("tangible", userId, request);
            navigate("/public");
          }
        }}
      >
        {previous ? "Edit Request" : "Add Request"}
      </button>
    </div>
  );
}
