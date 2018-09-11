import axios from 'axios'
import config from './config'

export default {
    login: body => axios.post(config.login, body),
    tableOrder: body => axios.get(config.tableOrder, body)
}
