// @flow

// TODO consider using rn boilerplate here
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';
import rootSaga from './sagas';
import type { StoreType } from './flowTypes/flowTypes';

const defaultState: $Shape<StoreType> = {
  companyData: {},
  rocketsData: [],
  launches: {
    launchesData: [],
    isPastLaunches: true,
    launchYear: '2018',
  },
  measurementSystem: {
    isMetricSystem: true,
  },
};

const sagaMiddleware = createSagaMiddleware();

const store: StoreType = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
