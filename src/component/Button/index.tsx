import React from "react";
import { useDispatch } from "react-redux";
import plus from "../../Assets/icons/plus.svg";
import "./index.scss";
import { imagePreviewQuery } from "../../Redux/sliceImagePreview";

const ButtonUpload = () => {
  const dispatch = useDispatch();
  const handleSelectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files;
    const arrFile = Array.from(selectedFile || []);

    const dataArray = arrFile.map((val) => URL.createObjectURL(val));
    dispatch(imagePreviewQuery(dataArray));
    // console.log(dataArray);
  };

  return (
    <div className="button-upload">
      <label className="button-upload__label">
        <div className="button-upload__image-container">
          <img className="button-upload__image" src={plus} alt="" />
        </div>
        <p className="button-upload__text">UPLOAD IMAGE</p>
        <input
          className="button-upload__input"
          type="file"
          name="images"
          onChange={handleSelectImage}
          multiple
          accept="image/png, image/jpeg, image/webp"
        />
      </label>
    </div>
  );
};

export default ButtonUpload;
