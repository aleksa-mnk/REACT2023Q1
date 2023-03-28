import React, { Component, ChangeEvent, RefObject } from 'react';
import { ImageFieldComponent } from '../../../core/types/types';

interface ImageFieldProps extends ImageFieldComponent {
  label: string;
}

class FileUpload extends Component<ImageFieldProps> {
  handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { fileInputRef, onChangeHandler } = this.props;
    const files = fileInputRef.current?.files;
    if (files && files.length > 0) {
      const file = files[0];
      onChangeHandler(event, URL.createObjectURL(file), 'imgSrc');
    }
  };

  render() {
    const { fileInputRef, errors, label } = this.props;
    return (
      <>
        <label className="form__label" htmlFor="profile-image">
          {label}
        </label>
        <input
          className="file-input"
          ref={fileInputRef as RefObject<HTMLInputElement>}
          onChange={this.handleFileChange}
          type="file"
          name="accept"
          id="profile-image"
          accept="image/png, image/gif, image/jpeg"
        />
        {errors.imgSrc && <span className="form__error-text">{errors.imgSrc}</span>}
      </>
    );
  }
}

export default FileUpload;
