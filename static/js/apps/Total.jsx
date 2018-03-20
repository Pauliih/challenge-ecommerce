import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//Components
import ListItems from './ListItems';

// React component for Total Button
export default class Total extends Component {
  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <button onClick={onIncreaseClick}>Total: <span>{value}</span></button>
        <ListItems />
      </div>
    )
  }
}

Total.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}