import React, { Component, RefObject } from 'react';
import { Cats } from '../../../core/config/cats';
import { CatSelectComponent } from '../../../core/types/types';

class Dropdown extends Component<CatSelectComponent> {
  private catInputRef: RefObject<HTMLSelectElement>;

  constructor(props: CatSelectComponent) {
    super(props);
    this.catInputRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const { onChangeHandler } = this.props;
    const value = this.catInputRef.current?.value;
    onChangeHandler(event, value, 'cat');
  }

  render() {
    const { errors } = this.props;

    return (
      <>
        <label className="form__label" htmlFor="cat">
          CATS:
        </label>
        <select
          className="form__select"
          ref={this.catInputRef}
          onChange={this.handleChange}
          name="cat"
          id="cat"
        >
          <option className="form__option" value="">
            Select cat
          </option>
          {Cats.map(({ name, id }) => (
            <option key={id} className="form__option" value={name}>
              {name}
            </option>
          ))}
        </select>
        {errors.cat && <span className="form__error-text">{errors.cat}</span>}
      </>
    );
  }
}

export default Dropdown;
