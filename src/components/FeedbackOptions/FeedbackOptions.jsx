export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const { good, neutral, bad } = options;

  return (
    <>
      <h2>Please leave feedback</h2>
      <button name={good} type="button" onClick={onLeaveFeedback}>
        Good
      </button>
      <button name={neutral} type="button" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button name={bad} type="button" onClick={onLeaveFeedback}>
        Bad
      </button>
    </>
  );
};
