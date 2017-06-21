import { combineReducers } from 'redux-immutable';
import { routerReducer, RouterState } from 'react-router-redux';
import { Map } from 'immutable';
import $$iidx12State from './iidx12';
import Iidx12 from '../models/iidx12';

type State = {
  $$iidx12State: Iidx12,
  router: RouterState,
}

export type RootState = State & Map<string, Iidx12>

export default combineReducers<RootState>({
  $$iidx12State,
  router: routerReducer,
});