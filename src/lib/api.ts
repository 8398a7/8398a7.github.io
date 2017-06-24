import axios from 'axios';

axios.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

function sendGet(url: string) {
  return axios.get(url).then(response => response.data);
}

export default class API {
  static fetchIidx12Users = () => sendGet('https://api.iidx12.tk/users/count');
}
