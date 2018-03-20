import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
// Components
import Total from './Total';
import ListItems from './ListItems';

// const App = ({ message }) => 
//   <div>{ message }</div>;

// Action
const increaseAction = { type: 'increase' }

// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

// Store
const store = createStore(counter)

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Total)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

// ReactDOM.render(
//   <App message="Hello world" />, document.getElementById('app')
// );