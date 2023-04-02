import React from 'react';

export interface CurdSnackCardProps {
  name: string;
  productionDate: string;
  taste: string;
  ingredients: string[];
  storageMode: string;
  image: string;
}

const CardItem = ({
  name,
  productionDate,
  taste,
  ingredients,
  storageMode,
  image,
}: CurdSnackCardProps) => {
  return (
    <div className="card card--grid">
      <div className="card__image" style={{ backgroundImage: `url(${image})` }}>
        {}
      </div>
      <div className="card__content">
        <h2 className="card__content__title">{name}</h2>
        <p className="card__content__info">Дата производства: {productionDate}</p>
        <p className="card__content__info">Вкус: {taste}</p>
        <p className="card__content__info">Режим хранения: {storageMode}</p>
        <p className="card__content__info">Ингридиенты: {ingredients.join(', ')}</p>
      </div>
    </div>
  );
};

export default CardItem;
