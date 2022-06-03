import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Switch({ to }) {
  const path = useLocation().pathname;
  const [isIntangible, setIsIntangible] = useState(
    path.startsWith(`${to}/intangible`)
  );
  return (
    <Link to={`${to}${isIntangible ? "/tangible" : "/intangible"}`}>
      <button onClick={() => setIsIntangible(!isIntangible)}>
        {isIntangible ? "Intangible" : "Tangible"}
      </button>
    </Link>
  );
}
