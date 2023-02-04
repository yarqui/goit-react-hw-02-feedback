// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import FeedbackForm from './FeedbackForm/';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    // const { good, bad, neutral } = this.state;

    return <FeedbackForm state={this.state}></FeedbackForm>;
  }
}
