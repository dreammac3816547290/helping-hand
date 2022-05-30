import React from "react";
import "./App.css";

import { Link, Outlet } from "react-router-dom";

import { getFirebaseIntangible } from "./app/firebase";
import { getFirebaseTangible } from "./app/firebase";

export default function App() {
  return (
    <div className="App">
      <Link to="/public">Public</Link>&nbsp;
      <Link to="/followed">Followed</Link>&nbsp;
      <Link to="/self">My Request</Link>&nbsp;
      <button
        onClick={() => {
          getFirebaseIntangible();
          getFirebaseTangible();
        }}
      >
        Refresh
      </button>
      <Outlet />
    </div>
  );
}
