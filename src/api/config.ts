const base: string = '/api';

// interface iConfig {
//   [config: string]: string;
// }
// const allConfig: iConfig = {
//   login: `${base}/login`
// }

export default {
  // api/Account/Token
  login: `${base}/Account/Token`,
  getUser: `${base}/Account/Token`,
  list: {
    get: `${base}/Order`,
    add: `${base}/Order`,
  }
};
