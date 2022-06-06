import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addRequest, editRequest } from "../../../app/firebase";
import Tag from "../../../components/Tag";

export default function SetIntangible({ previous }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState(previous?.title || "");
  const [description, setDescription] = useState(previous?.description || "");
  const [tagList, setTagList] = useState(previous?.tag || []);
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
      <Tag tagList={tagList} setTagList={setTagList} />
      <button
        onClick={() => {
          if (canAdd) {
            const request = {
              requesterId: userId,
              title,
              description,
              tag: tagList,
            };
            previous
              ? editRequest("intangible", previous.id, request)
              : addRequest("intangible", userId, request);
            navigate("/");
          }
        }}
      >
        {previous ? "Edit Request" : "Add Request"}
      </button>
    </div>
  );
}
