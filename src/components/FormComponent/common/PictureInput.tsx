import React, { LegacyRef } from 'react';

interface PictureInputProps {
  inputPicture: LegacyRef<HTMLInputElement> | undefined;
  inputPictureValid: boolean;
}

const PictureInput: React.FC<PictureInputProps> = ({ inputPicture, inputPictureValid }) => {
  return (
    <div className="form__picture form-block">
      <label htmlFor="form__card-picture">Profile picture:</label>
      <input
        id="form__card-picture"
        className="form__picture--input form-input"
        type="file"
        ref={inputPicture}
      />
      {!inputPictureValid && (
        <span className="form__picture--span error-span">Please upload a picture.</span>
      )}
    </div>
  );
};

export default PictureInput;
