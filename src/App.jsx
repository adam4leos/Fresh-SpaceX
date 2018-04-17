// @flow

import 'reset-css';
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory, createHashHistory } from 'history';
import { Provider } from 'react-redux';

import store from './store';
import ConnectedFreshSpaceX from './components/freshSpaceX/ConnectedFreshSpaceX.jsx';

import './components/layout/layout.scss';

const container = document.getElementById('app-root');

if (container === null) {
  throw new Error('Container doesn\'t exist');
}

// a bit dirty way to get prod env, coming from webpack
const historyToUse = PRODUCTION ? createHashHistory : createBrowserHistory;

function App() {
  return (
    <Provider store={store}>
      <Router history={historyToUse()}>
        <ConnectedFreshSpaceX />
      </Router>
    </Provider>
  );
}

// TODO EMPTY DATA VALIDATIONS!!

render(
  <App />,
  container,
);
