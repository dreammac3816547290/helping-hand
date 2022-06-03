import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addRequest } from "../../../app/firebase";

export default function AddIntangible() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const userId = useSelector((state) => state.user.userId);
  const canAdd = userId && title && description; // check userId, title, description
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
      <button
        onClick={() => {
          if (canAdd) {
            const request = {
              requesterId: userId,
              title,
              description,
            };
            addRequest("intangible", userId, request);
            navigate("/");
          }
        }}
      >
        Add Request
      </button>
    </div>
  );
}
