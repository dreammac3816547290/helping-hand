import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getRequestPage } from "../app/firebase";
import SetIntangible from "../features/request/intangible/SetIntangible";
import SetTangible from "../features/request/tangible/SetTangible";

export default function Edit({ type }) {
  // only user can edit
  const params = useParams();
  const [request, setRequest] = useState(null);
  const SetRequest = type === "intangible" ? SetIntangible : SetTangible;
  useEffect(() => {
    getRequestPage(type, params.requestId).then(setRequest);
  }, []);
  return (
    request && <SetRequest previous={{ id: params.requestId, ...request }} />
  );
}
