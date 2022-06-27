import React from "react";
import "./App.css";

import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  const signIn = useSelector((state) => state.user.userId);
  const photoURL = useSelector((state) => state.user.userPhotoUrl);
  return (
    <div className="App">
      <div className="nav">
        <h1>Helping Hand</h1>
        <Link to="/public">
          <button className="nav-button">Public</button>
        </Link>
        <Link to="/followed">
          <button className="nav-button">Followed</button>
        </Link>
        <Link to="/self">
          <button className="nav-button">My Request</button>
        </Link>
        {signIn ? "Signed in: " + signIn + photoURL : "Not signed in"}
        <Link to="/sign">
          <img
            className="profile-small"
            src="https://static.remove.bg/remove-bg-web/913b22608288cd03cc357799d0d4594e2d1c6b41/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
            alt="NO IMAGE"
          />
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
