import { useState } from 'react';

export default function Card({ cardData, successfulMove, gameOver }) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    if (clicked) {
      gameOver();
    } else {
      setClicked(true);
      successfulMove();
    }
  }

  return (
    <button type="button" className="card" onClick={handleClick}>
      <h3>{cardData.name}</h3>
    </button>
  );
}
