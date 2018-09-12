import axios, { AxiosPromise } from 'axios'
import config from './config'

interface iLogin {
    userName: string;
    password: string;
}

interface iLoginResponse {
    username: number;
    token: string;
}

interface iListParam {
    startPage: number;
    pageSize: number;
}

interface iListForm {
    buyer: string;
    buyDate: string;
    price: number;
    itemsName: string;
    addUser?: string;
    remarks?: string;
}

export default {
    login: (body:iLogin):AxiosPromise<iLoginResponse> => axios.post(config.login, body),
    getGroupList: ():AxiosPromise<Array<string>> => axios.get(config.getUser),
    getList: (params: iListParam): AxiosPromise<Array<iListForm>> => axios.get(config.list.get, {
        data: {
            ...params,
        }
    }),
    addList: (body: iListForm): AxiosPromise => axios.post(config.list.add, body)
}
