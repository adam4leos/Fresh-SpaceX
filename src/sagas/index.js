import { all } from 'redux-saga/effects';
import companyDataSagas from './companyDataSagas';
import rocketsDataSagas from './rocketsDataSagas';

export default function* rootSaga() {
  yield all([
    ...companyDataSagas,
    ...rocketsDataSagas,
  ]);
}
