import { Link, Outlet } from "react-router-dom";
import Switch from "./Switch";

export default function Page({ to }) {
  return (
    <div>
      <Switch to={to} />
      <Outlet />
      {to === "/self" && (
        <Link to="/add">
          <button>+</button>
        </Link>
      )}
    </div>
  );
}
