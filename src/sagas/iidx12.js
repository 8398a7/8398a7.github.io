import { call, put, fork, take } from 'redux-saga/effects';
import API from '../lib/api';

function* fetchIidx12Users() {
  try {
    const users = yield call(API.fetchIidx12Users);
    yield put(fetchedIidx12Users({ users }));
  } catch (e) {
    failedFetch(e);
  }
}

function* watchFetchIidx12Users() {
  while (typeof x === 'undefined') {
    const action = yield take(FETCH_IIDX12_USERS);
    yield fork(fetchIidx12Users);
  }
}

export default function* iidx12() {
}
