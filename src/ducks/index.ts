import { Map } from 'immutable';
import { routerReducer, RouterState } from 'react-router-redux';
import { combineReducers } from 'redux-immutable';
import Iidx12 from '../models/iidx12';
import $$iidx12State from './iidx12';

interface IState {
  $$iidx12State: Iidx12;
  router: RouterState;
}

export type RootState = IState & Map<string, Iidx12>;

export default combineReducers<RootState>({
  $$iidx12State,
  router: routerReducer,
});
