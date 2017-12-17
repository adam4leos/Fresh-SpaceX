import { call, put, takeLatest } from 'redux-saga/effects';
import { receiveCompanyData } from './../actions/actionCreators';
import { REQUEST_COMPANY_DATA } from './../actions/actionTypes';
import FetchData from './../utils/FetchData';

function* requestCompanyData(action) {
  try {
    const companyData = yield call(FetchData);
    yield put(receiveCompanyData(companyData));
  } catch (error) {
    console.log(error);
  }
}

const companyDataSagas = [
  takeLatest(REQUEST_COMPANY_DATA, requestCompanyData),
];

export default companyDataSagas;
