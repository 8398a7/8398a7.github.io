import API from './api';

it('.fetchAbilitysheetUsers', async () => {
  const res = await API.fetchAbilitysheetUsers();
  expect(res).toHaveProperty('users');
  expect(typeof res.users).toBe('number');
});
