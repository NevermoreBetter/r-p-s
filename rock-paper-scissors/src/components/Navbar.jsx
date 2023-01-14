function Navbar(props) {
  return (
    <div className="navigation">
      <h1 className="name">rock, paper, scissors</h1>
      <div className="score-container">
        <p className="score-name">Score</p>
        <span className="score">{props.score}</span>
      </div>
    </div>
  );
}

export default Navbar;
