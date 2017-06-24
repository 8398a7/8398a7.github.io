import { call, fork, put, take } from 'redux-saga/effects';
import {
  actionCreators,
  FETCH_IIDX12_USERS,
 } from '../ducks/iidx12';
import API from '../lib/api';

const {
  fetchedIidx12Users,
  failedFetch,
 } = actionCreators;

interface IfetchIidx12Users {
  users: number;
}

function* fetchIidx12Users() {
  try {
    const { users }: IfetchIidx12Users = yield call(API.fetchIidx12Users);
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
