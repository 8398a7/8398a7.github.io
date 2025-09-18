export type SagaCall<S> = S extends (...args: Array<unknown>) => infer T
  ? T extends Promise<infer U>
    ? U
    : never
  : never;
