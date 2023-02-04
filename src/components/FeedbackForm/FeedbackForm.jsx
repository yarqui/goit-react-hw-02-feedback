import React, { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

export default class FeedbackForm extends Component {
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
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <FeedbackOptions
          options={(good, neutral, bad)}
          onLeaveFeedback={this.handleFeedbackBtn}
        />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
