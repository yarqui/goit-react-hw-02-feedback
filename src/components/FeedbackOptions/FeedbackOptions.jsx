export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  //   const { good, neutral, bad } = props.options;
  console.log(options);

  return options.map(option => (
    <button
      key={option}
      name={option}
      type="button"
      onClick={onLeaveFeedback}
    ></button>
  ));

  // <h2>Please leave feedback</h2>
};
