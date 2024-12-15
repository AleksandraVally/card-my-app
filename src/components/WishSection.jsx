import React, { useState } from 'react';
import Modal from './Modal';
import './WishSection.css';

function WishSection() {
  const [wish, setWish] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const submitWish = () => {
    if (wish.trim() === '') { 
      setModalMessage('Введите ваше желание');
    } else {
      setModalMessage(`Ваше желание "${wish}" отправлено во Вселенную!`);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setWish(''); 
  };

  return (
    <section className="wish-section">
      <h2>Загадать желание</h2>
      <input
        type="text"
        id="wishInput"
        placeholder="Введите ваше желание здесь"
        value={wish}
        onChange={(e) => setWish(e.target.value)}
      />
      <button onClick={submitWish}>Отправить</button>
      <p>Желания отправляются во Вселенную</p>

      {isModalOpen && (
        <Modal message={modalMessage} onClose={closeModal} />
      )}
    </section>
  );
}

export default WishSection;