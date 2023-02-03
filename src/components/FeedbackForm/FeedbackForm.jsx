import React, { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
// import PropTypes from 'prop-types';

export default class FeedbackForm extends Component {
  //   static propTypes = {
  //     prop: PropTypes,
  //   };

  state = {
    good: this.props.state.good,
    neutral: this.props.state.neutral,
    bad: this.props.state.bad,
  };

  handleFeedbackBtn = e => {
    const keyName = e.target.name;

    this.setState(prevState => {
      return { [keyName]: prevState[keyName] + 1 };
    });
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);

    const total = values.reduce((total, value) => {
      return total + value;
    }, 0);

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const percentage = Math.round((this.state['good'] / total) * 100);
    return percentage ? percentage : 0;
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button name="good" type="button" onClick={this.handleFeedbackBtn}>
          Good
        </button>
        <button name="neutral" type="button" onClick={this.handleFeedbackBtn}>
          Neutral
        </button>
        <button name="bad" type="button" onClick={this.handleFeedbackBtn}>
          Bad
        </button>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
      </div>
    );
  }
}
