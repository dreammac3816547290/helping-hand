import { useState } from "react";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// import { addTangible } from "./tangibleSlice";
import { addTangible } from "../../../app/firebase";

export default function AddTangible() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState(); // date now to string
  // check if title is not empty
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
          addTangible({ title, description, dateTime });
          navigate("/");
        }}
      >
        Add Request
      </button>
    </div>
  );
}
