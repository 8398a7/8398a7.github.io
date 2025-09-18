import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers, Reducer } from 'redux';
import { fork } from 'redux-saga/effects';
import meta, { metaSaga } from './Meta';
import ui from './UI';

const rootReducer = (history: History<any>) =>
  combineReducers({
    meta,
    ui,
    router: connectRouter(history),
  });
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer> extends Reducer<infer S> ? S : never;

export function* rootSaga() {
  yield fork(metaSaga);
}
