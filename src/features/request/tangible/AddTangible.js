import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addRequest } from "../../../app/firebase";

export default function AddTangible() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState(""); // date now to string
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
      <br />
      <button
        onClick={() => {
          if (canAdd) {
            const request = {
              requesterId: userId,
              title,
              description,
              dateTime,
            };
            addRequest("tangible", userId, request);
            navigate("/public");
          }
        }}
      >
        Add Request
      </button>
    </div>
  );
}
