import { SagaResponse } from './SagaResponse';

interface IRes {
  users: number;
}

it('can infer the return value', () => {
  const mock: any = { users: 10 };
  const res: SagaResponse<() => Promise<IRes>> = mock;
  expect(res.users).toBe(10);
});
