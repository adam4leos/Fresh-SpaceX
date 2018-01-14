import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import companyData from './companyData';
import rocketsData from './rocketsData';
import launches from './launches';
import measurementSystem from './measurementSystem';

const rootReducer = combineReducers({
  companyData,
  rocketsData,
  launches,
  measurementSystem,
  routing: routerReducer,
});

export default rootReducer;
