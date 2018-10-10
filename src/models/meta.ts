import { Record } from 'immutable';

interface IMeta {
  abilitysheet: number;
}

export default class Meta extends Record({ abilitysheet: 0 }) {
  public readonly abilitysheet: number;

  constructor(params?: IMeta) {
    params ? super(params) : super();
  }

  public with(values: IMeta) {
    return this.merge(values) as this;
  }
}
