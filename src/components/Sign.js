import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  createUser,
  logOut,
  signIn,
  uploadProfilePicture,
} from "../app/firebase";
import { setUserProfile } from "../features/user/userSlice";

function Initial() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const canCreate = email && password.length >= 6; // check email & password
  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <button
        onClick={() => {
          if (canCreate) {
            createUser(email, password);
            // navigate("/");
            // need to use?
          }
        }}
      >
        Sign Up
      </button>
      <button
        onClick={() => {
          signIn(email, password);
          // navigate("/");
          // need to use?
        }}
      >
        Sign In
      </button>
    </div>
  );
}

function Signed({ userId }) {
  const [src, setSrc] = useState(
    "https://static.remove.bg/remove-bg-web/913b22608288cd03cc357799d0d4594e2d1c6b41/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
  );
  // LOAD PHOTO URL AT START !!
  const [imageFile, setImageFile] = useState(null);
  const dispatch = useDispatch();
  return (
    <div>
      <img className="profile-big" src={src} />
      <input
        type="file"
        accept="image/*"
        files={[imageFile]}
        onChange={(event) => setImageFile(event.target.files[0])}
      />
      <button
        onClick={() => {
          if (imageFile) {
            uploadProfilePicture(userId, imageFile).then((url) => setSrc(url));
            setImageFile(null);
          }
        }}
      >
        Submit
      </button>
      <br />
      <button
        onClick={() => {
          logOut();
          dispatch(setUserProfile({ userId: null, userPhotoURL: null })); // clean redux state after logout
          // how other user read profile from get download url? through PhotoURL?
        }}
      >
        Sign Out
      </button>
    </div>
  );
}

export default function Sign() {
  const userId = useSelector((state) => state.user.userId);
  return <div>{userId ? <Signed userId={userId} /> : <Initial />}</div>;
}
