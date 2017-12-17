import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';
import rootSaga from './sagas';

const defaultState = {
  companyData: {},
  rocketsData: [],
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
