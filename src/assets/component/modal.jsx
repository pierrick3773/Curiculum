import { useState } from 'react';
import Modal from 'react-modal';
import './modal.css'

Modal.setAppElement('#root'); // Assurez-vous que l'élément racine de votre application est correctement défini

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="modal-container">
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default MyComponent;
