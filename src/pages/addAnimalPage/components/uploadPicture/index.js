import React, { useRef, useState } from "react";
import "./index.css";
import UPLOAD_PLACEHOLDER from "assets/images/upload.png";
import { textGreyColor } from "globalStyles/globalStyle";
import DeleteIcon from "globalComponents/deleteIcon";

const UploadPicture = ({ onChange }) => {
  const inputFieldRef = useRef();
  const [selectedImageUrl, setSelectedImageUrl] = useState();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImageUrl(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div
      className="upload_container"
      onClick={() => !selectedImageUrl && inputFieldRef.current.click()}
    >
      {!selectedImageUrl && (
        <>
          <img src={UPLOAD_PLACEHOLDER} alt="" width="50%" height="50%" />
          <p style={{ color: textGreyColor, fontSize: 12, marginTop: 12 }}>
            Upload Animal Picture
          </p>
        </>
      )}
      {selectedImageUrl && (
        <div style={{ position: "absolute", top: -20, left: -20 }}>
          <DeleteIcon
            onClick={() => {
              setSelectedImageUrl();
              onChange(null);
            }}
          />
        </div>
      )}
      <input
        accept="image/*"
        style={{ display: "none" }}
        type="file"
        onChange={(e) => {
          onImageChange(e);
          onChange(e);
        }}
        ref={inputFieldRef}
      />
      {selectedImageUrl && (
        <img
          src={selectedImageUrl}
          alt=""
          width="100%"
          height="100%"
          style={{ objectFit: "contain" }}
        />
      )}
    </div>
  );
};

export default UploadPicture;
