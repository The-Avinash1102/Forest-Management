import React, { useState } from 'react';
import './Card.css';

function Card({ tree }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    setIsOpen(true);
  };

  const handlePopupClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={`tree-card ${isOpen ? 'open' : ''}`} onClick={handleCardClick}>
      <h2>{tree.name}</h2>
      <p>{tree.description}</p>

      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>{tree.name}</h2>
            <p>{tree.description}</p>
            <p>Additional popup content here...</p>
            <button onClick={handlePopupClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;