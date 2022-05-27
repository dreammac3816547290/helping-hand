import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Public() {
  const path = useLocation().pathname;
  const [isIntangible, setIsIntangible] = useState(
    path.startsWith("/public/intangible")
  );
  return (
    <>
      <Link to={`/public/${isIntangible ? "tangible" : "intangible"}`}>
        <button onClick={() => setIsIntangible(!isIntangible)}>
          {isIntangible ? "Intangible" : "Tangible"}
        </button>
      </Link>
      <Outlet />
    </>
  );
}
