// @flow

import 'reset-css';
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

import store from './store';
import ConnectedFreshSpaceX from './components/freshSpaceX/ConnectedFreshSpaceX.jsx';

import './components/layout/layout.scss';

const container = document.getElementById('app-root');

if (container === null) {
  throw new Error('Container doesn\'t exist');
}

// TODO consider one more build command for local files
function App() {
  return (
    <Provider store={store}>
      <Router history={createBrowserHistory()}>
        <ConnectedFreshSpaceX />
      </Router>
    </Provider>
  );
}

render(
  <App />,
  container,
);
