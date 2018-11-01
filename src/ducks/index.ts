import { Map } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { fork } from 'redux-saga/effects';
import $$meta, { initialState as metaState, metaSaga } from './meta';

export type RootState = Map<'$$meta', typeof metaState>;

export default combineReducers({
  $$meta,
});

export function* rootSaga() {
  yield fork(metaSaga);
}
