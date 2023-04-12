import React, { useRef, useEffect } from "react";

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
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"; // Prevent scrolling on body when modal is open
        } else {
            document.body.style.overflow = "visible"; // Restore scrolling on body when modal is closed
        }
    }, [isOpen]);

    const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === overlayRef.current) {
            onClose();
        }
    };

    if (!isOpen || !card) {
        return null;
    }

    return (
        <div className="overlay" ref={overlayRef} onClick={handleCloseModal}>
            <div className="modal">
                <button className="close-button" onClick={onClose}>
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
