import uniqid from 'uniqid';

export function shuffle(array) {
  const newArray = [...array];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }

  return newArray;
}

export function giveKeys(array) {
  return array.map((el) => ({
    ...el,
    key: uniqid(),
  }));
}
