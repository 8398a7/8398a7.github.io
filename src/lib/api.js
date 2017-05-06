import axios from 'axios';

axios.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

function sendGet(url) {
  return axios.get(url, config).then(response => response.data);
}

export default class API {
  static fetchIidx12Users = (opts) => {
    return sendGet('https://api.iidx12.tk/users/count');
  }
}