import React, { useState } from 'react';
import './Card.css'
import '/Users/admin/Desktop/card-my-app/src/assets/Карта.png'


function Card({ imageSrc, altText, text }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setModalOpen(false);
  };

  return (
    <>
      <div className="card" onClick={openModal}>
        <img src={imageSrc} alt={altText} />
      </div>
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <p>{text}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;