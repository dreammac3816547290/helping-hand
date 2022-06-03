import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getRequestPage } from "../../../app/firebase";

export default function IntangiblePage() {
  const params = useParams();
  const [request, setRequest] = useState({});
  const { title, description } = request;
  useEffect(() => {
    getRequestPage("intangible", params.requestId).then(setRequest);
  }, []);
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
