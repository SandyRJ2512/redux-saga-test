import { takeLatest, put } from 'redux-saga/effects';
import { GET_USER_SEARCH_LIST_SUCCESS, GET_USER_EDIT_LIST_SUCCESS, getUserSearchList, getUserEditList } from '../Action/action';

function* searchUser(searchtext) {
  yield put(getUserSearchList(searchtext));
}
function* editUser(data) {
  yield put(getUserEditList(data));
}
function* commonGenerator(searchtext) {
  yield takeLatest(GET_USER_SEARCH_LIST_SUCCESS, searchUser);
  yield takeLatest(GET_USER_EDIT_LIST_SUCCESS, editUser);
}

export default commonGenerator;