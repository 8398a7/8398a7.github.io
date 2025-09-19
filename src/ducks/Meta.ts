import { captureException } from '@sentry/browser';
import ActionReducer from 'action-reducer';
import { produce } from 'immer';
import { call, put, takeEvery } from 'redux-saga/effects';

import API from '../lib/api';
import type { SagaCall } from '../types/redux-saga';

const initialState = {
  abilitysheet: 0,
  ist: 0,
};
const { createAction, reducer } = ActionReducer(initialState);
export default reducer;

const FETCH_ABILITYSHEET_USERS = 'meta/fetchAbilitysheetUsers';
const FETCH_IST_USERS = 'meta/fetchIstUsers';
export const actions = {
  fetchAbilitysheetUsers: createAction(FETCH_ABILITYSHEET_USERS, (state) => state),
  fetchIstUsers: createAction(FETCH_IST_USERS, (state) => state),
};
const updateAbilitysheetUsers = createAction('meta/updateAbilitysheetUsers', (state, abilitysheet: number) =>
  produce(state, (draft) => {
    draft.abilitysheet = abilitysheet;
  }),
);
const updateIstUsers = createAction('meta/updateIstUsers', (state, ist: number) =>
  produce(state, (draft) => {
    draft.ist = ist;
  }),
);

function* fetchAbilitysheetUsers() {
  try {
    const { users }: SagaCall<typeof API.fetchAbilitysheetUsers> = yield call(API.fetchAbilitysheetUsers);

    yield put(updateAbilitysheetUsers(users));
  } catch (e) {
    captureException(e);
  }
}

function* fetchIstUsers() {
  try {
    const { users }: SagaCall<typeof API.fetchIstUsers> = yield call(API.fetchIstUsers);
    yield put(updateIstUsers(users));
  } catch (e) {
    captureException(e);
  }
}

export function* metaSaga() {
  yield takeEvery(FETCH_ABILITYSHEET_USERS, fetchAbilitysheetUsers);
  yield takeEvery(FETCH_IST_USERS, fetchIstUsers);
}
