import axios from 'axios'
import config from './config'

axios.defaults.headers.common['Authorization'] = ''
export default {
    login: body => axios.post(config.login, body),
    tableOrder: body => axios.get(config.tableOrder, body)
}
