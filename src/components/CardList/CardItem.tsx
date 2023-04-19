import { CardProps } from '../../core/types';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const Card = ({ card }: CardProps) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleCardClick = () => {
    setShowPopup(true);
  };

  const handleCrossClick = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="card-item" onClick={handleCardClick} data-testid="card-item">
        <div className="card-item__image-container">
          <img src={card.images.fixed_height.url} alt={card.title} />
        </div>
        <div className="card-item__content">
          <h3 className="card-item__title">{card.title}</h3>
        </div>
      </div>
      {showPopup && <Modal onClose={handleCrossClick} card={card} isOpen={showPopup} />}
    </>
  );
};

export default Card;
