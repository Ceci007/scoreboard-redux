import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = props => {
  return (
    <div className="header">
      <Stats players={props.players} />
      <h1>Scoreboard</h1>
      <Stopwatch />
    </div>
  );
};

export default Header;
