import axios from 'axios';

axios.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

function sendGet<T>(url: string) {
  return axios.get<T>(url).then(response => response.data);
}

interface IFetchUsers {
  users: number;
}

export default class API {
  public static fetchAbilitysheetUsers = () =>
    sendGet<IFetchUsers>('https://api-sp12.iidx.app/users/count')
  public static fetchIstUsers = () =>
    sendGet<IFetchUsers>('https://score.iidx.app/api/v1/users/count')
}
