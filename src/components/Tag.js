import { useState } from "react";

export default function Tag({ tagList, setTagList }) {
  const [tag, setTag] = useState("");
  const tagBlock = tagList.map((tag) => (
    <div className="tag capitalize">
      {tag}
      <button
        onClick={() => setTagList(tagList.filter((newTag) => newTag !== tag))}
      >
        x
      </button>
    </div>
  )); // span?
  return (
    <div>
      <input
        type="text"
        className="capitalize"
        value={tag}
        onChange={(event) => setTag(event.target.value.toLowerCase())}
      />
      <button
        onClick={() => {
          if (tag && !tagList.includes(tag)) {
            setTagList(tagList.concat(tag));
            setTag("");
          }
        }}
      >
        Add tag
      </button>
      <div className="flex">{tagBlock}</div>
    </div>
  );
}
