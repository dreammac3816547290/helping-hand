import { Outlet } from "react-router-dom";

import Switch from "../../components/Switch";

export default function AddRequest() {
  return (
    <div>
      <Switch to="/add" />
      <Outlet />
    </div>
  );
}
