import { Record } from 'immutable';

type TIidx12 = {
  users?: number,
}

export default class Iidx12 extends Record({ users: 0 }) {
  users: number;

  constructor(params?: TIidx12) {
    params ? super(params) : super();
  }

  with(values: TIidx12) {
    return this.merge(values) as this;
  }
}