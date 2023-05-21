export default function Scoreboard({ currentScore, highScore }) {
  return (
    <div className="scoreboard">
      <h2>
        Current score:
        {' '}
        {currentScore}
      </h2>
      <h2>
        High Score:
        {' '}
        {highScore}
      </h2>
    </div>
  );
}
