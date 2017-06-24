import { Record } from 'immutable';

interface IIidx12 {
  users: number;
}

export default class Iidx12 extends Record({ users: 0 }) {
  readonly users: number;

  constructor(params?: IIidx12) {
    params ? super(params) : super();
  }

  with(values: IIidx12) {
    return this.merge(values) as this;
  }
}
