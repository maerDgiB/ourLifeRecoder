<template>
  <div class="loginbox">
    <h1>登录</h1>
    <el-form :model="loginForm" :rules="rules" ref="loginForm" status-icon>
      <el-form-item label="用户名" prop='user'>
        <el-input type="text" id="user" v-model="loginForm.user" autoFocus></el-input>
      </el-form-item>
      <el-form-item label="密码" prop='pwd'>
        <el-input type="password" id="pwd" v-model="loginForm.pwd" @keyup.enter.native="postLogin"></el-input>
      </el-form-item>
      <el-button type="primary" class="loginbtn" @click="postLogin">登录</el-button>
    </el-form>
  </div>
</template>
<style lang="less" src="./login.less"></style>
<script>
  import Md5 from './login.js'
  export default {
    data () {
      var checkUser = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'))
        }
      }
      var checkPwd = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('密码不能为空'))
        }
      }
      return {
        loginForm: {
          user: '',
          pwd: ''
        },
        rules: {
          user: [
            {validator: checkUser, trigger: 'blur'}
          ],
          pwd: [
            {validator: checkPwd, trigger: 'blur'},
            { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
          ]
        }
      }
    },
    mounted: function () {
      this.postLogin()
    },
    methods: {
      postLogin: function () {
        let params = {
          userName: this.loginForm.user,
          password: Md5.md5(this.loginForm.pwd)
        }
        console.log(params)
        this.$api.login(params).then((res) => {
          if (res) {
            window.localStorage.setItem("token",res.data.token);
            window.location = "http://localhost:8080/#/home"
          }
        })
      }
    }
}

</script>
