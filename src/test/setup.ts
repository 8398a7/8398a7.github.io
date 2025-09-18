import { vi } from 'vitest';

type JestLike = typeof vi & {
  fn: typeof vi.fn;
  mock: typeof vi.mock;
  spyOn: typeof vi.spyOn;
  clearAllMocks: typeof vi.clearAllMocks;
  resetAllMocks: typeof vi.resetAllMocks;
  restoreAllMocks: typeof vi.restoreAllMocks;
};

const jestLike: JestLike = Object.assign(vi, {
  fn: vi.fn,
  mock: vi.mock,
  spyOn: vi.spyOn,
  clearAllMocks: vi.clearAllMocks,
  resetAllMocks: vi.resetAllMocks,
  restoreAllMocks: vi.restoreAllMocks,
});

(globalThis as typeof globalThis & { jest?: JestLike }).jest = jestLike;
