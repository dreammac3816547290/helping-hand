import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Switch({ to }) {
  const path = useLocation().pathname;
  const [isIntangible, setIsIntangible] = useState();
  useEffect(() => setIsIntangible(!path.startsWith(`${to}/tangible`)));
  return (
    <Link to={`${to}${isIntangible ? "/tangible" : "/intangible"}`}>
      <button className="request-button">
        {isIntangible ? "Intangible" : "Tangible"}
      </button>
    </Link>
  );
}
