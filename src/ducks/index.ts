import { Map } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { fork } from 'redux-saga/effects';
import Meta from '../models/meta';
import $$meta, { metaSaga } from './meta';

interface IState {
  $$meta: Meta,
};
export type RootState = IState & Map<string, Meta>;

export default combineReducers<IState>({
  $$meta,
});

export function* rootSaga() {
  yield fork(metaSaga);
}
