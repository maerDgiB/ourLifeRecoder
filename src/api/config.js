// const base = 'http://api.bqggg.com/api'
import {Base64} from 'js-base64'
const base = 'http://47.106.234.64/api'
let token = localStorage.getItem('token')
let toknInfo = token ? Base64.decode(token) : ''
let groupId = token ? JSON.parse(toknInfo.split('}')[1] + '}').Group : ''
export default {
  login: `${base}/Account/Token`,
  tableOrder: `${base}/Order`,
  nickNames: `${base}/Account/NickNames`,
  addOrder: `${base}/Order`,
  getTeam: `${base}/Team/${groupId}`
}
