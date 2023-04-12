import React from 'react';

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
    <div className="overlay" onClick={handleClose}>
      <div className="modal">
        <button className="close-button" onClick={handleClose}>
          X
        </button>
        <div className="modal-content">
          <img src={card.imageUrl} alt={card.title} />
          <h2>{card.title}</h2>
          <p>Slug: {card.slug}</p>
          <p>Rating: {card.rating}</p>
          <p>Source: {card.source}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
