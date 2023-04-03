import { ISnack } from '../../core/types';
import React from 'react';

interface SnackCardProps {
  snack: ISnack;
}

const SnackCard = ({ snack }: SnackCardProps): JSX.Element => {
  const { snackName, productionDate, taste, ingredients, storageMode, image } = snack;

  return (
    <div className="card card--grid">
      <div className="card__image" style={{ backgroundImage: `url(${image})` }}>
        {}
      </div>
      <div className="card__content">
        <h2 className="card__content__title">{snackName}</h2>
        <p className="card__content__info">Дата производства: {productionDate}</p>
        <p className="card__content__info">Вкус: {taste}</p>
        <p className="card__content__info">Режим хранения: {storageMode}</p>
        <p className="card__content__info">Ингридиенты: {ingredients.join(', ')}</p>
      </div>
    </div>
  );
};

export default SnackCard;
