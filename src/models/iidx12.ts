import { Record } from 'immutable';

interface TIidx12 {
  users: number;
}

export default class Iidx12 extends Record({ users: 0 }) {
  readonly users: number;

  constructor(params?: TIidx12) {
    params ? super(params) : super();
  }

  with(values: TIidx12) {
    return this.merge(values) as this;
  }
}
