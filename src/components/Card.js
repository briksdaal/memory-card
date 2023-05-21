import { useState } from 'react';

export default function Card({ cardData, shuffleCards }) {
  const [ctr, setCtr] = useState(0);

  function handleClick() {
    setCtr((c) => c + 1);
    shuffleCards();
  }

  return (
    <button type="button" className="card" onClick={handleClick}>
      <h3>{cardData.name}</h3>
      <h2>
        Ctr:
        {' '}
        {ctr}
      </h2>
    </button>
  );
}
