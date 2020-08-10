import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_USER_LIST_DATA, getUserListSuccess, getUserListError } from '../Action/action';

function apiPath() {
  return axios({ method: 'GET', url: 'http://localhost:5000/userlist' });
}
function* apiCall() {
  // API call to get List data
  try {
    const apiResponse = yield call(apiPath);
    yield put(getUserListSuccess(apiResponse.data.result));
  } catch(e) {
    yield put(getUserListError(e.message.statusText))
  }
}
function* listData() {
  yield takeLatest(FETCH_USER_LIST_DATA, apiCall)
}

export default listData;