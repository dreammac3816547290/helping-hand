import React from "react";
import "./App.css";

import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Link to="/intangibleRequest" />
      <Link to="/tangibleRequest" />
      <Outlet />
    </div>
  );
}
