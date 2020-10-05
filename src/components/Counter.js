import React from 'react';
import Icon from './Icon';

const Counter = props => (
  <div className="counter" >
    <button
      className="counter-action decrement"
      onClick={() => props.updatePlayerScore(props.index, -1)}>
      -
    </button>
    <div className="counter-score"> {props.score} </div>
    <button
      className="counter-action increment"
      onClick={() => props.updatePlayerScore(props.index, 1)}>
      +
    </button>
    {/*<Icon />*/}
  </div>);

export default Counter;
