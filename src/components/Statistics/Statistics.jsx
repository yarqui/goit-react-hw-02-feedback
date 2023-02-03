export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <h2>Statistics</h2>
      <ul>
        <li>
          Good:<span> {good}</span>
        </li>
        <li>
          Neutral:<span> {neutral}</span>
        </li>
        <li>
          Bad:<span> {bad}</span>
        </li>
        <li>
          Total:<span> {total}</span>
        </li>
        <li>
          Positive Feedback:
          <span> {positivePercentage}%</span>
        </li>
      </ul>
    </>
  );
};
