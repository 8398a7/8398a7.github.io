import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import meta, { metaSaga } from './Meta';
import ui from './UI';

const rootReducer = () =>
  combineReducers({
    meta,
    ui,
  });
export default rootReducer;
export type RootState = ReturnType<ReturnType<typeof rootReducer>>;

export function* rootSaga() {
  yield fork(metaSaga);
}
