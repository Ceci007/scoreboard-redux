import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PlayerReducer from './reducers/Player';
import Scoreboard from './containers/Scoreboard';
import './index.css';

const store = createStore(
  PlayerReducer,
  window.devToolsExtension && window.devToolsExtension()
);

render(
  <Provider store={store}>
    <Scoreboard />
  </Provider>,
  document.getElementById('root')
);
