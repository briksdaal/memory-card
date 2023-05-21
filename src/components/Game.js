import { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import Scoreboard from './Scoreboard';
import CardsContainer from './CardsContainer';
import { shuffle, giveKeys } from '../assets/helpers';
import cardsData from '../assets/cardsData';

export default function Game() {
  const [cardsArray, setCardsArray] = useState(giveKeys(cardsData, uniqid));
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function shuffleCards() {
    setCardsArray((cards) => shuffle(cards));
  }

  function raiseCurrentScore() {
    setCurrentScore((score) => score + 1);
  }

  function successfulMove() {
    raiseCurrentScore();
    shuffleCards();
  }

  function gameOver() {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }

    setCurrentScore(0);

    setCardsArray((cards) => shuffle(giveKeys(cards, uniqid)));
  }

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="memory-game">
      <div className="top-row">
        <h1>Dragonball Z Memory Game</h1>
        <h2>Don&apos;t click on the same card twice!</h2>
        <Scoreboard currentScore={currentScore} highScore={highScore} />
      </div>
      <CardsContainer cardsArray={cardsArray} successfulMove={successfulMove} gameOver={gameOver} />
    </div>
  );
}
