import axios from 'axios'
import config from './config'

axios.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2Yjg4Mzc4YS0zNWU0LTRkNzAtNDVhNS0wOGQ2MjFkYTYyMDkiLCJHcm91cCI6ImViZmJjZDhhLTU5NWQtNDU3Zi1iZDJhLWMyMDA3ZDI3ZTRjOCIsIlJvbGUiOiJDbGllbnQiLCJpYXQiOiIyMDE4LzkvMjYgMTQ6MjM6NDUiLCJleHAiOjE1Mzc5NzkwMjUsImlzcyI6IkxpZmVSZWNvZGVyIn0.v9iJ1yjqye9XpSX81dsKxc8AWGaeblvEVLF5jP7Bhx4'
export default {
    login: body => axios.post(config.login, body),
    tableOrder: body => axios.get(config.tableOrder, body),
    nickNames: () => axios.get(config.nickNames),
    addOrder: body => axios.post(config.addOrder, body),
    editOrder: body => axios.put(config.addOrder, body)
}
