import Card from './Card';

export default function CardsContainer({ cardsArray, shuffleCards }) {
  return (
    <div className="cards-container">
      { cardsArray.map((card) => (
        <Card cardData={card} key={card.name} shuffleCards={shuffleCards} />
      ))}
    </div>
  );
}
