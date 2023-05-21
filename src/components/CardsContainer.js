import Card from './Card';
import '../styles/CardsContainer.css';

export default function CardsContainer({ cardsArray, successfulMove, badMove }) {
  return (
    <div className="cards-container">
      { cardsArray.map((card) => (
        <Card key={card.key} cardData={card} successfulMove={successfulMove} badMove={badMove} />
      ))}
    </div>
  );
}
