import { useState } from 'react';
import '../styles/Card.css';

export default function Card({ cardData, successfulMove, badMove }) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    if (clicked) {
      badMove();
    } else {
      setClicked(true);
      successfulMove();
    }
  }

  return (
    <button type="button" className="card" onClick={handleClick}>
      <div className="card-overlay" />
      <img src={cardData.img_url} alt={cardData.name.toLowerCase()} />
      <h3>{cardData.name}</h3>
    </button>
  );
}
