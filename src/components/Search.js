import { useState } from "react";

import Tag from "./Tag";

export default function Search({
  title,
  setTitle,
  description,
  setDescription,
  requestAddStart,
  setRequestAddStart,
  requestAddEnd,
  setRequestAddEnd,
  tagList,
  setTagList,
}) {
  const [focus, setFocus] = useState("off");
  return (
    <div
      className={`search ${focus}`}
      onFocus={() => setFocus("on")}
      onBlur={() => setFocus("off")}
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <br />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <br />
      <input
        type="datetime-local"
        value={requestAddStart}
        onChange={(event) => setRequestAddStart(event.target.value)}
      />
      <input
        type="datetime-local"
        value={requestAddEnd}
        onChange={(event) => setRequestAddEnd(event.target.value)}
      />
      <Tag tagList={tagList} setTagList={setTagList} />
    </div>
  );
}
