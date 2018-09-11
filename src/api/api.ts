import axios, { AxiosPromise } from 'axios'
import config from './config'

interface iLogin {
    name: string;
    password: string;
}

interface iLoginResponse {
    code: number;
    data: any;
}

export default {
    login: (body:iLogin):AxiosPromise<iLoginResponse> => axios.post(config.login, body)
}
