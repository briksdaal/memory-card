import Card from './Card';

export default function CardsContainer({ cardsArray, successfulMove, badMove }) {
  return (
    <div className="cards-container">
      { cardsArray.map((card) => (
        <Card key={card.key} cardData={card} successfulMove={successfulMove} badMove={badMove} />
      ))}
    </div>
  );
}
