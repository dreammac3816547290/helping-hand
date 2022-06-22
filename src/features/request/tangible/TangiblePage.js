import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import { getRequestPage } from "../../../app/firebase";

export default function TangiblePage() {
  const params = useParams();
  const location = useLocation();
  const [request, setRequest] = useState({});
  const { title, description, dateTime, tag: tagList } = request;
  useEffect(() => {
    getRequestPage("tangible", params.requestId).then(setRequest);
  }, []);
  return (
    <div className="request-page">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{dateTime}</p>
      {tagList}
      <Link to={`${location.pathname}/edit`}>Edit</Link>{" "}
    </div>
  );
}
