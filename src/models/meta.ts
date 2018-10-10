import { Record } from 'immutable';

interface IParams {
  abilitysheet?: number;
  ist?: number;
}

export default class Meta extends Record({ abilitysheet: 0, ist: 0 }) {
  public readonly abilitysheet: number;
  public readonly ist: number;

  constructor(params?: IParams) {
    params ? super(params) : super();
  }

  public with(params: IParams) {
    return this.merge(params) as this;
  }
}
