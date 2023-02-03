import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FeedbackForm extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return <div>Hey</div>;
  }
}
