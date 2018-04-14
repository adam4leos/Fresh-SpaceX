// @flow

// TODO cleanup files, cosider two files here
import 'reset-css';
import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { withRouter } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import store from './store';
import * as actionCreators from './actions/actionCreators';
import Main from './views/main/Main.jsx';
import Rockets from './views/rockets/Rockets.jsx';
import RocketInfo from './views/rocketInfo/RocketInfo.jsx';
import Launches from './views/launches/Launches.jsx';
import LaunchInfo from './views/launchInfo/LaunchInfo.jsx';
import Contacts from './views/contacts/Contacts.jsx';
import Header from './components/header/Header.jsx';
import './components/layout/layout.scss';
import type { StoreType } from './flowTypes/flowTypes';

const container = document.getElementById('app-root');

if (container === null) {
  throw new Error('Container doesn\'t exist');
}

type FreshSpaceXType = StoreType;

const FreshSpaceX = (props: FreshSpaceXType) => (
  <div className="content">
    <Header />
    <Route
      exact
      path="/"
      render={() => (
        <Main companyData={props.companyData} requestCompanyData={props.requestCompanyData} />
      )}
    />
    <Route
      path="/rockets"
      render={() => (
        <Rockets rocketsData={props.rocketsData} requestRocketsData={props.requestRocketsData} />
      )}
    />
    <Route
      path="/rockets/:id"
      render={() => (
        <RocketInfo
          {...props.location.state.rocketInfo}
          isMetricSystem={props.measurementSystem.isMetricSystem}
          toggleMetricSystem={props.toggleMetricSystem}
        />
      )}
    />
    <Route
      exact
      path="/launches"
      render={() => (
        <Launches
          launches={props.launches}
          requestLaunchesData={props.requestLaunchesData}
          changeLaunchYear={props.changeLaunchYear}
          toggleLaunchesMode={props.toggleLaunchesMode}
        />
      )}
    />
    <Route exact path="/launches/:id" render={() => <LaunchInfo {...props.location.state.launchData} />} />
    <Route exact path="/contacts" component={Contacts} />
  </div>
);

function mapStateToProps(state) {
  return {
    companyData: state.companyData,
    rocketsData: state.rocketsData,
    launches: state.launches,
    measurementSystem: state.measurementSystem,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const ConnectedFreshSpaceX = withRouter(connect(mapStateToProps, mapDispatchToProps)(FreshSpaceX));

function App() {
  const basename = PRODUCTION ? '/Fresh-SpaceX' : '/';
  return (
    <Provider store={store}>
      <Router basename={basename}>
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
