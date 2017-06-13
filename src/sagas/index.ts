import { fork } from 'redux-saga/effects';
import iidx12 from './iidx12';

export default function* rootSaga() {
  yield fork(iidx12);
}
