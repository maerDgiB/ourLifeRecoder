import axios from 'axios'
import config from './config'

axios.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2ZjcxYmQyMC01M2ZmLTQ2YTItNWUwYS0wOGQ2MTU0Mzk1ZTciLCJHcm91cCI6IjZkNzUzOTgwLThjODQtNGRhZC04NmE5LWYxZWI4ZmMwMGFiYyIsIlJvbGUiOiJDbGllbnQiLCJpYXQiOiIyMDE4LzkvMTUgMjozMDoxNiIsImV4cCI6MTUzNjk4NTgxNiwiaXNzIjoiTGlmZVJlY29kZXIifQ.isRysZfKShLXxXhlqAqdwDHbkOryje5hz0LvQwUMo2o'
export default {
    login: body => axios.post(config.login, body),
    tableOrder: body => axios.get(config.tableOrder, body),
    nickNames: () => axios.get(config.nickNames),
    addOrder: body => axios.post(config.addOrder, body),
    editOrder: body => axios.put(config.addOrder, body)
}
