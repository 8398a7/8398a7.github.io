import axios from 'axios';
import API from './api';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

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
