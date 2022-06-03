import { useEffect } from "react";
import { useSelector } from "react-redux";

import { getRequest, useFollow } from "../../app/firebase";
import IntangibleRequest from "./intangible/IntangibleRequest";
import TangibleRequest from "./tangible/TangibleRequest";

export default function RequestList({ scope, type }) {
  const userId = useSelector((state) => state.user.userId);
  useEffect(() => {
    userId && getRequest(scope, type, userId);
  }, [userId, scope, type]);
  const [follow, changeFollow] = useFollow(type);
  const requestList = useSelector((state) => state.request[type][scope]);
  const Request = type === "intangible" ? IntangibleRequest : TangibleRequest;
  const requestBlock = requestList.map((request) => (
    <Request
      request={request}
      isFollowed={follow.includes(request.id)}
      changeFollow={(event) => {
        event.preventDefault(); // prevent Link
        changeFollow(request.id);
      }}
    />
  ));
  return <div>{requestBlock}</div>;
}
