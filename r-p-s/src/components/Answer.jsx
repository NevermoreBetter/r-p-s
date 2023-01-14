function Answer(props) {
  const ans = props.value;

  function handleClick(ans) {
    props.handleAnswer(ans);
  }

  return (
    <div>
      <button
        onClick={() => handleClick(ans)}
        className="answer-button"
        id={(() => {
          switch (props.value) {
            case "rock":
              return "answer-rock";
            case "paper":
              return "answer-paper";
            case "scissors":
              return "answer-scissors";
            default:
              return "4";
          }
        })()}
      >
        {props.img}
      </button>
    </div>
  );
}

export default Answer;
