import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function useTangible(id) {
  // temporary
  return useSelector((state) =>
    state.request.tangible.public.find((request) => request.id === id)
  );
}

export default function TangiblePage() {
  const params = useParams();
  const request = useTangible(Number(params.requestId));
  return (
    <>
      <h1>{request.title}</h1>
      <p>{request.description}</p>
    </>
  );
}