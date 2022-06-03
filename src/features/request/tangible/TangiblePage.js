import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getRequestPage } from "../../../app/firebase";

export default function TangiblePage() {
  const params = useParams();
  const [request, setRequest] = useState({});
  const { title, description, dateTime } = request;
  useEffect(() => {
    getRequestPage("tangible", params.requestId).then(setRequest);
  }, []);
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{dateTime}</p>
    </div>
  );
}
