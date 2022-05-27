import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Public() {
  const [isIntangible, setIsIntangible] = useState(true);
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
