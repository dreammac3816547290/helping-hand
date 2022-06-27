import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";

export default function Photo({
  imageSrc,
  setImageSrc,
  removed,
  setRemoved,
  imageFile,
  setImageFile,
}) {
  // const [imageSrc, setImageSrc] = useState([]); // previous images src
  // const [removed, setRemoved] = useState([]); // src to be removed
  const [tempURL, setTempURL] = useState([]); // temporary URL for new images
  // const [imageFile, setImageFile] = useState([]); // uploaded image files
  useEffect(
    () => () => {
      tempURL.forEach((src) => URL.revokeObjectURL(src));
    },
    []
  );
  return (
    <div>
      {imageSrc.map((src) => (
        <div>
          <img className="thumbnail" src={src} />
          <button
            onClick={() => {
              setImageSrc(imageSrc.filter((newSrc) => newSrc !== src));
              setRemoved(removed.concat(src));
            }}
          >
            x
          </button>
        </div>
      ))}
      {tempURL.map((src) => (
        <div>
          <img className="thumbnail" src={src} />
          <button
            onClick={() => {
              setTempURL(tempURL.filter((newSrc) => newSrc !== src));
              URL.revokeObjectURL(src);
            }}
          >
            x
          </button>
        </div>
      ))}
      <input
        type="file"
        accept="image/*"
        files={imageFile}
        onChange={(event) => {
          const files = event.target.files;
          setTempURL(
            tempURL.concat([...files].map((file) => URL.createObjectURL(file)))
          );
          setImageFile(imageFile.concat([...files]));
        }}
        multiple
      />
      <button
        onClick={() => {
          removed.forEach();
          imageFile.forEach((image) => {
            const id = nanoid();
          });
          // navigate to home
        }}
      >
        Submit
      </button>
    </div>
  );
}

// track deleted for old images, delete later (both the source array in the request && the image in firebase storage)
// cache url for new images
// onSubmit or quit, remove cached URL
// onSubmit, create nanoid for new URL, add to source array in request, then upload the file to firebase storage
