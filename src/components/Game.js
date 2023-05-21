import { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import Scoreboard from './Scoreboard';
import CardsContainer from './CardsContainer';
import { shuffle, giveKeys } from '../jsAssets/helpers';
import getLevelData from '../jsAssets/levelsGenerator';
import '../styles/Game.css';

export default function Game() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [cardsArray, setCardsArray] = useState(giveKeys(getLevelData(1), uniqid));
  const [currentLevelScore, setCurrentLevelScore] = useState(0);
  const [currentTotalScore, setCurrentTotalScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [highLevel, setHighLevel] = useState(1);

  function shuffleCards() {
    setCardsArray((cards) => shuffle(cards));
  }

  function raiseScore() {
    setCurrentLevelScore((score) => score + 1);
    setCurrentTotalScore((score) => score + 1);
  }

  function nextLevel() {
    setCurrentLevel((level) => level + 1);
    setCurrentLevelScore(0);
    setCardsArray(giveKeys(getLevelData(currentLevel + 1), uniqid));
  }

  function resetScoresAndLevels() {
    setCurrentLevel(1);
    setCardsArray(giveKeys(getLevelData(1), uniqid));
    setCurrentLevelScore(0);
    setCurrentTotalScore(0);
  }

  function successfulMove() {
    raiseScore();

    if (currentLevelScore + 1 === cardsArray.length) {
      nextLevel();
    } else {
      shuffleCards();
    }
  }

  function badMove() {
    if (currentTotalScore > highScore) {
      setHighScore(currentTotalScore);
    }

    if (currentLevel > highLevel) {
      setHighLevel(currentLevel);
    }

    resetScoresAndLevels();
  }

  useEffect(() => {
    shuffleCards();
  }, [currentLevel]);

  return (
    <div className="memory-game">
      <div className="top-row">
        <h1>Dragonball Z Memory Game</h1>
        <h2>Don&apos;t click on the same card twice!</h2>
        <Scoreboard
          currentScore={currentTotalScore}
          currentLevel={currentLevel}
          highScore={highScore}
          highLevel={highLevel}
        />
      </div>
      <CardsContainer
        cardsArray={cardsArray}
        successfulMove={successfulMove}
        badMove={badMove}
      />

    </div>
  );
}
