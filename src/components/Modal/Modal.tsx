import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface Card {
  id: string;
  title: string;
  imageUrl: string;
  slug: string;
  rating: string;
  source: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  card: Card | null;
}

const Modal = ({ isOpen, onClose, card }: ModalProps) => {
  if (!isOpen || !card) {
    return null;
  }

  document.body.style.overflow = 'hidden';

  const handleClose = () => {
    document.body.style.overflow = 'auto';
    onClose();
  };

  return (
    <div className="overlay">
      <div className="modal">
        <FaTimes onClick={handleClose} className="fas fa-times modal__close-button search-bar-clear" />
        <div className="modal__content">
          <img src={card.imageUrl} alt={card.title} />
          <h2>{card.title}</h2>
          <p>Slug: {card.slug}</p>
          <p>Rating: {card.rating}</p>
          <p>
            Source:{' '}
            <a className="modal__source" href={card.source}>
              {card.source}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
