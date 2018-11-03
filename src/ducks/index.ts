import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { Map } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { fork } from 'redux-saga/effects';
import $$meta, { initialState as metaState, metaSaga } from './meta';

export type RootState = Map<'$$meta', typeof metaState>;

export default (history: History<any>) => combineReducers({
  $$meta,
  router: connectRouter(history),
});

export function* rootSaga() {
  yield fork(metaSaga);
}
