import Card from './Card';

export default function CardsContainer({ cardsArray, successfulMove, gameOver }) {
  return (
    <div className="cards-container">
      { cardsArray.map((card) => (
        <Card key={card.key} cardData={card} successfulMove={successfulMove} gameOver={gameOver} />
      ))}
    </div>
  );
}
