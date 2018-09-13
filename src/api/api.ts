import axios, { AxiosPromise } from 'axios';
import config from './config';

interface Login {
  userName: string;
  password: string;
}

interface LoginResponse {
  username: number;
  token: string;
}

interface ListParam {
  startPage: number;
  pageSize: number;
}

interface ListForm {
  buyer: string;
  buyDate: string;
  price: number;
  itemsName: string;
  addUser?: string;
  remarks?: string;
}

export default {
  login: (body: Login): AxiosPromise<LoginResponse> => axios.post(config.login, body),
  getGroupList: (): AxiosPromise<Array<string>> => axios.get(config.getUser),
  getList: (params: ListParam): AxiosPromise<Array<ListForm>> => axios.get(config.list.get, {
    data: {
      ...params
    }
  }),
  addList: (body: ListForm): AxiosPromise => axios.post(config.list.add, body)
};
