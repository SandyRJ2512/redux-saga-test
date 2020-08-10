import { all } from 'redux-saga/effects';
import listData from './listData';
import commonGenerator from './commonFunctions';

function* showList() {
  yield all([listData()]);
  yield all([commonGenerator()]);
}

export default showList;