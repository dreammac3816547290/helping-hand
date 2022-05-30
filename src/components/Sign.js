import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createUser, signIn } from "../app/firebase";

export default function Sign() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const canAdd = email && password.length >= 6; // check email & password
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
          if (canAdd) {
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
    </div>
  );
}
