import Vue from 'vue'
import Element from 'element-ui'
import axios from 'axios'
import api from './api/api';


Vue.use(Element)
Vue.prototype.Axios = axios
Vue.prototype.$api = api

