import { Outlet, useNavigate } from "react-router-dom";

export default function AddRequest() {
  const navigate = useNavigate();
  return (
    <>
      <select onChange={(event) => navigate(`/add/${event.target.value}`)}>
        <option value="intangible">Intangible</option>
        <option value="tangible">Tangible</option>
      </select>
      <Outlet />
    </>
  );
}
