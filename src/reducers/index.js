import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import companyData from './companyData';
import rocketsData from './rocketsData';
import launches from './launches';

const rootReducer = combineReducers({
  companyData,
  rocketsData,
  launches,
  routing: routerReducer,
});

export default rootReducer;
