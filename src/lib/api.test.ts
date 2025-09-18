import axios from 'axios';
import { vi } from 'vitest';
import API from './api';

vi.mock('axios');

const mockedAxios = vi.mocked(axios, true);

beforeEach(() => {
  mockedAxios.get.mockReset();
});

it('.fetchAbilitysheetUsers', async () => {
  mockedAxios.get.mockResolvedValueOnce({ data: { users: 42 } });

  const res = await API.fetchAbilitysheetUsers();

  expect(mockedAxios.get).toHaveBeenCalledWith(
    'https://api-sp12.iidx.app/users/count',
  );
  expect(res).toEqual({ users: 42 });
});

it('.fetchIstUsers', async () => {
  mockedAxios.get.mockResolvedValueOnce({ data: { users: 7 } });

  const res = await API.fetchIstUsers();

  expect(mockedAxios.get).toHaveBeenCalledWith(
    'https://score.iidx.app/api/v1/users/count',
  );
  expect(res).toEqual({ users: 7 });
});
