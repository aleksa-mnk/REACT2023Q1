import React, { Component, ChangeEvent, RefObject } from 'react';
import { SwitcherComponent } from '../../../core/types/types';

interface SwitcherProps extends SwitcherComponent {
  acceptedInputRef: RefObject<HTMLInputElement>;
}

class Switcher extends Component<SwitcherProps> {
  handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { acceptedInputRef, onChangeHandler } = this.props;
    onChangeHandler(event, acceptedInputRef.current?.checked ?? false, 'accepted');
  };

  render() {
    const { acceptedInputRef, errors, checked } = this.props;
    return (
      <>
        <div className="switcher">
          <span className="switcher__status">I accepted</span>
          <div className="switcher__wrapper transparent">
            <input
              className="switcher__input visually-hidden"
              id="switcher"
              type="checkbox"
              ref={acceptedInputRef}
              onChange={this.handleChange}
              checked={checked}
            />
            <label className="switcher__label" htmlFor="switcher">
              <span className="visually-hidden">Accepted switcher</span>
            </label>
          </div>
        </div>
        {errors.accepted && (
          <span className="form__error-text form__error-text--switcher">{errors.accepted}</span>
        )}
      </>
    );
  }
}

export default Switcher;
