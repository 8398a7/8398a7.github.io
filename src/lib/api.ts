import axios from 'axios';

axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

function sendGet<T>(url: string) {
  return axios.get<T>(url).then((response) => response.data);
}

interface IFetchUsers {
  users: number;
}

const fetchAbilitysheetUsers = () => sendGet<IFetchUsers>('https://api-sp12.iidx.app/users/count');
const fetchIstUsers = () => sendGet<IFetchUsers>('https://score.iidx.app/api/v1/users/count');

const API = {
  fetchAbilitysheetUsers,
  fetchIstUsers,
};

export { fetchAbilitysheetUsers, fetchIstUsers };
export default API;
