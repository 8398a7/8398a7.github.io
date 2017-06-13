import { call, put, fork, take } from 'redux-saga/effects';
import API from '../lib/api';
import {
  FETCH_IIDX12_USERS,
  actionCreators,
 } from '../ducks/iidx12';

 const {
  fetchedIidx12Users,
  failedFetch,
 } = actionCreators;

 type fetchIidx12UsersResponse = {
   users: number,
 }

function* fetchIidx12Users() {
  try {
    const { users }: fetchIidx12UsersResponse = yield call(API.fetchIidx12Users);
    yield put(fetchedIidx12Users(users));
  } catch (e) {
    yield put(failedFetch(e));
  }
}

function* watchFetchIidx12Users() {
  while (true) {
    yield take(FETCH_IIDX12_USERS);
    yield fork(fetchIidx12Users);
  }
}

export default function* iidx12() {
  yield fork(watchFetchIidx12Users);
}
