import axios from 'axios'
import config from './config'

export default {
    login: body => axios.post(config.login, body),
    tableOrder: body => axios.get(config.tableOrder, body),
    nickNames: () => axios.get(config.nickNames),
    addOrder: body => axios.post(config.addOrder, body),
    editOrder: body => axios.put(config.addOrder, body),
    getTeam: body => axios.get(config.getTeam, body)
}
