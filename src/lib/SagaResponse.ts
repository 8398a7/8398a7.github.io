export type SagaResponse<T> =
  T extends (...args: any[]) => any ?
  (ReturnType<T> extends Promise<infer R> ? R : never)
  : never;
