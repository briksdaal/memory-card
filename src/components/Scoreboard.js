export default function Scoreboard({
  currentScore, currentLevel, highScore, highLevel,
}) {
  return (
    <div className="scoreboard">
      <h3>
        Current Score:
        {' '}
        {currentScore}
      </h3>
      <h3>
        Current Level:
        {' '}
        {currentLevel}
      </h3>
      <h3>
        High Score:
        {' '}
        {highScore}
      </h3>
      <h3>
        High Level:
        {' '}
        {highLevel}
      </h3>
    </div>
  );
}
