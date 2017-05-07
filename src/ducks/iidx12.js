import { createAction, handleActions } from 'redux-actions';
import { Iidx12 } from '../models';

const FETCH_IIDX12_USERS = 'iidx12/fetchIidx12Users';
const fetchIidx12Users = createAction(FETCH_IIDX12_USERS);
const FETCHED_IIDX12_USERS = 'iidx12/fetchedIidx12Users';
const fetchedIidx12Users = createAction(FETCHED_IIDX12_USERS);
const FAILED_FETCH = 'iidx12/failedFetch';
const failedFetch = createAction(FAILED_FETCH);

export const actions = {
  FETCH_IIDX12_USERS,
  fetchIidx12Users,
  fetchedIidx12Users,
  failedFetch,
};

export default handleActions({
  [FETCHED_IIDX12_USERS]: ($$state, action) => $$state.set('users', action.payload.users),
  [FAILED_FETCH]: $$state => $$state,
  [undefined]: $$state => $$state,
}, new Iidx12());
