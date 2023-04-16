import React, { useEffect, useState } from 'react';
import { ICard } from '../../core/types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  card: ICard | null;
}

const Modal = ({ isOpen, onClose, card }: ModalProps) => {
  const [bodyOverflow, setBodyOverflow] = useState<string>('auto');
  const [showCopySuccess, setShowCopySuccess] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setBodyOverflow('hidden');
    }

    return () => {
      setBodyOverflow('auto');
    };
  }, [isOpen]);

  const handleClose = () => {
    setBodyOverflow('auto');
    onClose();
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleCopyImage = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigator.clipboard.writeText((card as ICard).imageUrl);
    setShowCopySuccess(true);
    setTimeout(() => {
      setShowCopySuccess(false);
    }, 2000);
  };

  const handleCopySource = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigator.clipboard.writeText((card as ICard).source);
    setShowCopySuccess(true);
    setTimeout(() => {
      setShowCopySuccess(false);
    }, 2000);
  };

  if (!isOpen || !card) {
    return null;
  }

  return (
    <div className="overlay modal" role="dialog" aria-modal="true" onClick={handleOverlayClick}>
      <div className="modal__dialog" onClick={handleModalClick}>
        <div className="modal__content">
          <img className="modal__image" src={card.imageUrl} alt={card.title} />
          <div className="modal__info">
            <div className="modal__info--copy">
              <h2 className="modal__title">{card.title}</h2>
              <a href={card.imageUrl} className="modal__info--copy-btn" onClick={handleCopyImage}>
                Copy image
              </a>
              <a href={card.source} className="modal__info--copy-btn" onClick={handleCopySource}>
                Copy source
              </a>
              {showCopySuccess && <span className="modal__info--copy-success">Copied!</span>}
            </div>
            <div className="modal__info--about">
              <p className="modal__slug">
                <span>Slug</span> {card.slug}
              </p>
              <p className="modal__rating">
                <span>Rating</span> {card.rating}
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>{`body { overflow: ${bodyOverflow}; }`}</style>
    </div>
  );
};

export default Modal;
