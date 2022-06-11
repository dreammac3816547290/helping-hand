import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import Search from "./Search";
import Switch from "./Switch";

export default function Page({ to }) {
  const [title, setTitle] = useState("");
  const [tagList, setTagList] = useState([]);
  const searchProps = { title, setTitle, tagList, setTagList };
  return (
    <div>
      <Switch to={to} />
      <Search {...searchProps} />
      <Outlet context={searchProps} /> {/* Remove setters from props? */}
      {to === "/self" && (
        <Link to="/add">
          <button>+</button>
        </Link>
      )}
    </div>
  );
}
