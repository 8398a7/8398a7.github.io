import Meta from './meta';

it('.new', () => {
  const meta = new Meta();
  expect(meta.abilitysheet).toBe(0);
  expect(meta.ist).toBe(0);
});

it('#with', () => {
  const meta = new Meta();
  expect(meta.with({ ist: 2 }).ist).toBe(2);
});
