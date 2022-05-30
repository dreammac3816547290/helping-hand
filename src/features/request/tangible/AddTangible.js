import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import { addTangible } from "./tangibleSlice";
import { addTangible } from "../../../app/firebase";

export default function AddTangible() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState(""); // date now to string
  const userId = useSelector((state) => state.user.userId);
  const canAdd = title && description && dateTime && userId;
  // check if title, description, dateTime is not empty
  // check if userId exist
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
            dispatch(
              addTangible({ requesterId: userId, title, description, dateTime })
            );
            navigate("/");
          }
        }}
      >
        Add Request
      </button>
    </div>
  );
}
