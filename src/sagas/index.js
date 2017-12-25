import { all } from 'redux-saga/effects';
import companyDataSagas from './companyDataSagas';
import rocketsDataSagas from './rocketsDataSagas';
import launchesDataSagas from './launchesDataSagas';

export default function* rootSaga() {
  yield all([
    ...companyDataSagas,
    ...rocketsDataSagas,
    ...launchesDataSagas,
  ]);
}
