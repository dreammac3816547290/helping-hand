import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import { getRequestPage } from "../../../app/firebase";
import Comment from "../../../components/Comment";

export default function TangiblePage() {
  const params = useParams();
  const location = useLocation();
  const [request, setRequest] = useState({});
  const {
    title,
    description,
    dateTime,
    tag: tagList,
    comment,
    imageSrc,
  } = request;
  useEffect(() => {
    getRequestPage("tangible", params.requestId).then(setRequest);
  }, [params.requestId]);
  return (
    <div className="request-page">
      <h1>{title}</h1>
      {imageSrc?.map((src) => (
        <img className="thumbnail" src={src} />
      ))}
      <p>{description}</p>
      <p>{dateTime}</p>
      {tagList}
      <Link to={`${location.pathname}/edit`}>Edit</Link>{" "}
      <Comment
        type="tangible"
        requestId={params.requestId}
        commentList={comment}
      />
    </div>
  );
}
