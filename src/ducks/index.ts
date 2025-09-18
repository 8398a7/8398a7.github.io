import { connectRouter } from 'connected-react-router';
import type { History } from 'history';
import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import meta, { metaSaga } from './Meta';
import ui from './UI';

const rootReducer = (history: History) =>
  combineReducers({
    meta,
    ui,
    router: connectRouter(history),
  });
export default rootReducer;
export type RootState = ReturnType<ReturnType<typeof rootReducer>>;

export function* rootSaga() {
  yield fork(metaSaga);
}
