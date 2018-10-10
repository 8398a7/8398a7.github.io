import axios from 'axios';

axios.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

function sendGet<T>(url: string) {
  return axios.get<T>(url).then(response => response.data);
}

export interface IFetchAbilitysheetUsers {
  users: number;
}

export default class API {
  public static fetchAbilitysheetUsers = () => sendGet<IFetchAbilitysheetUsers>('https://api.iidx12.tk/users/count');
}
