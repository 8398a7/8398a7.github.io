import { captureException } from '@sentry/browser';
import ActionReducer from 'action-reducer';
import { call, put, takeEvery } from 'redux-saga/effects';
import API from '../lib/api';
import { IFetchAbilitysheetUsers } from '../lib/api';
import Meta from '../models/meta';

const { createAction, reducer } = ActionReducer(new Meta());
export default reducer;

export const actions = {
  fetchAbilitysheetUsers: createAction('FETCH_ABILITYSHEET_USERS', $$state => $$state),
  updateAbilitysheetUsers: createAction('UPDATE_ABILITYSHEET_USERS', ($$state, abilitysheet: number) => $$state.with({ abilitysheet })),
};

function* fetchAbilitysheetUsers() {
  try {
    const { users }: IFetchAbilitysheetUsers = yield call(API.fetchAbilitysheetUsers);

    yield put(actions.updateAbilitysheetUsers(users));
  } catch (e) {
    captureException(e);
  }
}

export function* metaSaga() {
  yield takeEvery('FETCH_ABILITYSHEET_USERS', fetchAbilitysheetUsers);
}
