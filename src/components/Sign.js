import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { createUser, logOut, signIn } from "../app/firebase";

export default function Sign() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const canCreate = email && password.length >= 6; // check email & password
  const userId = useSelector((state) => state.user.userId);
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
            navigate("/");
          }
        }}
      >
        Sign Up
      </button>
      <button
        onClick={() => {
          signIn(email, password);
          navigate("/");
        }}
      >
        Sign In
      </button>
      {userId && <button onClick={logOut}>Sign Out</button>}
    </div>
  );
}
