import { shuffle } from './helpers';
import cardsData from './cardsData';

export default function getLevelData(level) {
  let noOfCards = level * 2;

  if (noOfCards > cardsData.length) {
    noOfCards = cardsData.length;

    if (noOfCards % 2 === 1) {
      noOfCards -= 1;
    }
  }

  return shuffle(cardsData).slice(0, noOfCards);
}
