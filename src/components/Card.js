import { useState } from 'react';
import '../styles/Card.css';

export default function Card({
  cardData, successfulMove, badMove, setShuffled,
}) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setShuffled(true);
    if (clicked) {
      badMove();
    } else {
      setTimeout(() => {
        setShuffled(false);
      }, 100);
      successfulMove();
      setClicked(true);
    }
  }

  return (
    <button
      type="button"
      className="card"
      onClick={handleClick}
    >
      <div className="card-overlay" />
      <div className="card-content">
        <img
          src={cardData.img_url}
          alt={cardData.name.toLowerCase()}
        />
        <h3>{cardData.name}</h3>
      </div>
    </button>
  );
}
