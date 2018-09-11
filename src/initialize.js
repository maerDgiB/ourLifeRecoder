import Vue from 'vue'
import Element from 'element-ui'
import api from './api/api'

Vue.use(Element)
Vue.prototype.$api = api
