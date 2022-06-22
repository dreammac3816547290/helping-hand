import React from "react";
import "./App.css";

import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  const signIn = useSelector((state) => state.user.userId);
  return (
    <div className="App">
      <div className="nav">
        <h1>Helping Hand</h1>
        <br />
        <Link to="/public">Public</Link>&nbsp;
        <Link to="/followed">Followed</Link>&nbsp;
        <Link to="/self">My Request</Link>&nbsp;
        <Link to="/sign">
          <button>Sign</button>
        </Link>
        {signIn ? "Signed in: " + signIn : "Not signed in"}
      </div>
      <Outlet />
    </div>
  );
}
