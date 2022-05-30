import React from "react";
import "./App.css";

import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";

import { getFirebaseIntangible } from "./app/firebase";
import { getFirebaseTangible } from "./app/firebase";

export default function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Link to="/public">Public</Link>&nbsp;
      <Link to="/followed">Followed</Link>&nbsp;
      <Link to="/self">My Request</Link>&nbsp;
      <Link to="/sign">
        <button>Sign Up / Sign In</button>
      </Link>
      <button
        onClick={() => {
          dispatch(getFirebaseIntangible());
          dispatch(getFirebaseTangible());
        }}
      >
        Refresh
      </button>
      <Outlet />
    </div>
  );
}
