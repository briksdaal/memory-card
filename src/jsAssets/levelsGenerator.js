import { shuffle, giveKeys } from './helpers';
import cardsData from './cardsData';

export default function getLevelData(level) {
  const noOfCards = level * 2 > 16
    ? 16
    : level * 2;

  return giveKeys(shuffle(cardsData).slice(0, noOfCards));
}
