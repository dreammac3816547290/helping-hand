import { useState } from "react";
import { useSelector /* , useDispatch */ } from "react-redux";
import { useNavigate } from "react-router-dom";

// import { addIntangible } from "./intangibleSlice";
import { addIntangible } from "../../../app/firebase";

export default function AddIntangible() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const userId = useSelector((state) => state.user.userId);
  const canAdd = title && description && userId;
  // check if title, description is not empty
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
      <button
        onClick={() => {
          if (canAdd) {
            addIntangible({ requesterId: userId, title, description });
            navigate("/");
          }
        }}
      >
        Add Request
      </button>
    </div>
  );
}
