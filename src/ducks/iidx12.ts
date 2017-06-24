import Iidx12 from '../models/iidx12';

export type FETCH_IIDX12_USERS = 'iidx12/fetchIidx12Users';
export const FETCH_IIDX12_USERS: FETCH_IIDX12_USERS = 'iidx12/fetchIidx12Users';
export type FETCHED_IIDX12_USERS = 'iidx12/fetchedIidx12Users';
export const FETCHED_IIDX12_USERS: FETCHED_IIDX12_USERS = 'iidx12/fetchedIidx12Users';
export type FAILED_FETCH = 'iidx12/failedFetch';
export const FAILED_FETCH: FAILED_FETCH = 'iidx12/failedFetch';

export interface IfetchIidx12UsersAction {
  type: FETCH_IIDX12_USERS;
}

export interface IfetchedIidx12UsersAction {
  type: FETCHED_IIDX12_USERS;
  payload: {
    users: number,
  };
}

export interface IfailedFetchAction {
  type: FAILED_FETCH;
  payload: string;
}

export type Iidx12Action = IfetchIidx12UsersAction | IfetchedIidx12UsersAction | IfailedFetchAction;

export const actionCreators = {
  fetchIidx12Users: (): IfetchIidx12UsersAction => ({ type: FETCH_IIDX12_USERS }),
  fetchedIidx12Users: (users: number): IfetchedIidx12UsersAction => (
    { type: FETCHED_IIDX12_USERS, payload: { users } }
  ),
  failedFetch: (payload: string): IfailedFetchAction => ({ type: FAILED_FETCH, payload }),
};

export default function reducer($$state: Iidx12 = new Iidx12(), action: Iidx12Action): Iidx12 {
  switch (action.type) {
    case FETCHED_IIDX12_USERS:
      const { users } = action.payload;
      return $$state.with({ users });
    case FAILED_FETCH:
      return $$state;
    default: return $$state;
  }
}
