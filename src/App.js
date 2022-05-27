import React from "react";
import "./App.css";

import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Link to="/public">Public</Link>
      <Link to="/followed">Followed</Link>
      <Link to="/self">My Request</Link>
      <Outlet />
    </div>
  );
}
