import { call, put, fork, take } from 'redux-saga/effects';
import API from '../lib/api';
import { actions } from '../ducks/iidx12';

const {
  FETCH_IIDX12_USERS,
  fetchedIidx12Users,
  failedFetch,
} = actions;

function* fetchIidx12Users() {
  try {
    const { users } = yield call(API.fetchIidx12Users);
    yield put(fetchedIidx12Users({ users }));
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
