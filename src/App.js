import React from "react";
import "./App.css";

import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Link to="/public">Public</Link>&nbsp;
      <Link to="/followed">Followed</Link>&nbsp;
      <Link to="/self">My Request</Link>&nbsp;
      <Outlet />
    </div>
  );
}
