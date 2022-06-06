import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import { getRequestPage } from "../../../app/firebase";

export default function IntangiblePage() {
  const params = useParams();
  const location = useLocation();
  const [request, setRequest] = useState({});
  const { title, description, tag: tagList } = request;
  useEffect(() => {
    getRequestPage("intangible", params.requestId).then(setRequest);
  }, []);
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {tagList}
      <Link to={`${location.pathname}/edit`}>Edit</Link>
    </div>
  );
}
