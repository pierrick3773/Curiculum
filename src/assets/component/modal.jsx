import { useState } from 'react';
import Modal from 'react-modal';
import './modal.css';
import { dataCV } from '../../content_option';

Modal.setAppElement('#root');

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
      {dataCV.map((item, index) => (
        <button
          key={item.id}
          onClick={() => openModal(item)}
          className={`div${index + 1}`}
        >
          {item.title}
        </button>
      ))}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className={{
          base: 'ReactModal__Content',
          afterOpen: 'ReactModal__Content--after-open',
          beforeClose: 'ReactModal__Content--before-close'
        }}
        contentLabel="Example Modal"
      >
        {selectedItem && (
          <>
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.contenu}</p>
            <button className="exit-button" onClick={closeModal}>X</button>
          </>
        )}
      </Modal>
    </div>
  );
};

export default MyComponent;
