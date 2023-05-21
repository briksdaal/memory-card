import { useState } from 'react';
import Scoreboard from './Scoreboard';
import CardsContainer from './CardsContainer';
import shuffle from '../assets/helpers';
import cardsData from '../assets/cardsData';

export default function Game() {
  const [cardsArray, setCardsArray] = useState(cardsData);

  function shuffleCards() {
    setCardsArray(shuffle(cardsArray));
  }

  function unmount() {
    setCardsArray([]);
  }

  function remount() {
    setCardsArray(shuffle(cardsData));
  }

  return (
    <div className="memory-game">
      <div className="top-row">
        <h1>Dragonball Z Memory Game</h1>
        <h2>Don&apos;t click on the same card twice!</h2>
        <Scoreboard />
      </div>
      <CardsContainer cardsArray={cardsArray} shuffleCards={shuffleCards} />
      <div>
        <button type="submit" onClick={unmount}>Unmount</button>
        <button type="submit" onClick={remount}>Remount</button>
      </div>
    </div>
  );
}
