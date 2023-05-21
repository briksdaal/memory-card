import { useState } from 'react';

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
      <h3>{cardData.name}</h3>
      <img src={cardData.img_url} alt={cardData.name} />
    </button>
  );
}
