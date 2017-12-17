import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import companyData from './companyData';
import rocketsData from './rocketsData';

const rootReducer = combineReducers({
  companyData,
  rocketsData,
  routing: routerReducer,
});

export default rootReducer;
