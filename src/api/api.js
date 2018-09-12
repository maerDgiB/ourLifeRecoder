import axios from 'axios'
import config from './config'

axios.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2ZjcxYmQyMC01M2ZmLTQ2YTItNWUwYS0wOGQ2MTU0Mzk1ZTciLCJHcm91cCI6IjZkNzUzOTgwLThjODQtNGRhZC04NmE5LWYxZWI4ZmMwMGFiYyIsIlJvbGUiOiJDbGllbnQiLCJpYXQiOiIyMDE4LzkvMTIgMTI6MTM6MDUiLCJleHAiOjE1MzY3NjE1ODUsImlzcyI6IkxpZmVSZWNvZGVyIn0.1epjLg-Xu0-3cVeY4GL8pr6hwffDhYZfkeKc9bhCMi0'
export default {
    login: body => axios.post(config.login, body),
    tableOrder: body => axios.get(config.tableOrder, body),
    nickNames: () => axios.get(config.nickNames)
}
