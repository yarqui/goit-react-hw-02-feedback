import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class FeedbackForm extends Component {
  //   static propTypes = {
  //     prop: PropTypes,
  //   };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackBtn = e => {
    const keyName = e.target.name;

    this.setState(prevState => {
      return { [keyName]: prevState[keyName] + 1 };
    });
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);

    const total = values.reduce();
    console.log('total:', total);

    return total;
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
        <h2>Statistics</h2>
        <ul>
          <li>
            Good: <span>{this.state.good}</span>
          </li>
          <li>
            Neutral: <span>{this.state.neutral}</span>
          </li>
          <li>
            Bad: <span>{this.state.bad}</span>
          </li>
          <li>
            Total: <span></span>
          </li>
          <li>
            Positive Feedback: <span>%</span>
          </li>
        </ul>
      </div>
    );
  }
}
