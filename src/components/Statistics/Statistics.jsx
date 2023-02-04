import PropTypes from 'prop-types';
import Notification from 'components/Notification';

export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return !total ? (
    <Notification message="There is no feedback" />
  ) : (
    <>
      <ul>
        <li key="good">
          Good:<span> {good}</span>
        </li>
        <li key="neutral">
          Neutral:<span> {neutral}</span>
        </li>
        <li key="bad">
          Bad:<span> {bad}</span>
        </li>
        <li key="total">
          Total:<span> {total}</span>
        </li>
        <li key="positivePercentage">
          Positive Feedback:
          <span> {positivePercentage}%</span>
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
