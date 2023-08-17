import { useLayoutEffect, useState } from 'react';
import Card from './Card';
import '../styles/CardsContainer.css';

export default function CardsContainer({
  cardsArray, successfulMove, badMove, currentLevel, iteration,
}) {
  const [loading, setLoading] = useState(true);
  const [shuffled, setShuffled] = useState(false);

  let classlist = 'cards-container';

  if (loading) {
    classlist = `${classlist} loading`;
  }

  if (shuffled) {
    classlist = `${classlist} shuffled`;
  }

  useLayoutEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      setLoading(true);
      setShuffled(false);
    };
  }, [iteration, currentLevel]);

  return (
    <div className={classlist}>
      {loading && (
      <div className="loading-container">
        <h3>
          Level
          {' '}
          {currentLevel}
        </h3>
      </div>
      )}
      { cardsArray.map((card) => (
        <Card
          key={card.key}
          cardData={card}
          successfulMove={successfulMove}
          badMove={badMove}
          setShuffled={setShuffled}
        />
      ))}
    </div>
  );
}
