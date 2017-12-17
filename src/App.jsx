import 'reset-css';
import React from 'react';
import { render } from 'react-dom';
import {
  Router,
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
import Contacts from './views/contacts/Contacts.jsx';
import Header from './components/header/Header.jsx';
import './components/layout/layout.scss';

function mapStateToProps(state) {
  return {
    companyData: state.companyData,
    rocketsData: state.rocketsData,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const FreshSpaceX = props => (
  <div className="content">
    <Header />
    <Route exact path="/" render={() => <Main {...props} />} />
    <Route path="/rockets" render={() => <Rockets {...props} />} />
    <Route path="/rockets/:id" render={() => <RocketInfo {...props.location.state.rocketInfo} />} />
    <Route path="/contacts" component={Contacts} />
  </div>
);

const ConnectedFreshSpaceX = withRouter(connect(mapStateToProps, mapDispatchToProps)(FreshSpaceX));

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
  document.getElementById('app-root'),
);
