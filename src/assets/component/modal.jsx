import { useState } from 'react';
import Modal from 'react-modal';
import './modal.css';
import { dataCV } from '../../content_option';

Modal.setAppElement('#root'); // Assurez-vous que l'élément racine de votre application est correctement défini

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="modal-container">
      {dataCV.map((item) => (
        <button key={item.id} onClick={() => openModal(item)}>
          {item.title}
        </button>
      ))}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="ReactModal__Content"
        contentLabel="Example Modal"
      >
        {selectedItem && (
          <>
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.contenu}</p>
            <button onClick={closeModal}>Close Modal</button>
          </>
        )}
      </Modal>
    </div>
  );
};

export default MyComponent;
