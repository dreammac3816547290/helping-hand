import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function useIntangible(id) {
  // temporary
  return useSelector((state) =>
    state.request.intangible.public.find((request) => request.id === id)
  );
}

export default function IntangiblePage() {
  const params = useParams();
  const request = useIntangible(params.requestId);
  return (
    <>
      <h1>{request.title}</h1>
      <p>{request.description}</p>
    </>
  );
}
