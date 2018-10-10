import { captureException } from '@sentry/browser';
import ActionReducer from 'action-reducer';
import { call, put, takeEvery } from 'redux-saga/effects';
import API from '../lib/api';
import { IFetchUsers } from '../lib/api';
import Meta from '../models/meta';

const { createAction, reducer } = ActionReducer(new Meta());
export default reducer;

export const actions = {
  fetchAbilitysheetUsers: createAction('FETCH_ABILITYSHEET_USERS', $$state => $$state),
  fetchIstUsers: createAction('FETCH_IST_USERS', $$state => $$state),
  updateAbilitysheetUsers: createAction('UPDATE_ABILITYSHEET_USERS', ($$state, abilitysheet: number) => $$state.with({ abilitysheet })),
  updateIstUsers: createAction('UPDATE_IST_USERS', ($$state, ist: number) => $$state.with({ ist })),
};

function* fetchAbilitysheetUsers() {
  try {
    const { users }: IFetchUsers = yield call(API.fetchAbilitysheetUsers);

    yield put(actions.updateAbilitysheetUsers(users));
  } catch (e) {
    captureException(e);
  }
}

function* fetchIstUsers() {
  try {
    const { users }: IFetchUsers = yield call(API.fetchIstUsers);

    yield put(actions.updateIstUsers(users));
  } catch (e) {
    captureException(e);
  }
}

export function* metaSaga() {
  yield takeEvery('FETCH_ABILITYSHEET_USERS', fetchAbilitysheetUsers);
  yield takeEvery('FETCH_IST_USERS', fetchIstUsers);
}
