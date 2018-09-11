<template>
  <div class='login-page'>
    <div class="loginbox" @click='showLogin' :class="[count===0? 'init' : 'showLogin']">
        <p class='init-text'>登录</p>
        <h3>登录</h3>
        <el-form>
          <el-form-item label="用户名">
            <el-input type="text" id="user" v-model="formName.user" @blur="inputBlur('user',formName.user)"></el-input>
            <p>{{formName.userError}}</p>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" id="password" v-model="formName.password" @blur="inputBlur('password',formName.password)"></el-input>
            <p>{{formName.passwordError}}</p>
          </el-form-item>
          <el-button class="upbtn" type="primary" @click="submitForm('formName')" v-bind:disabled="formName.beDisabled">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form>
      </div>
  </div>
</template>
<style lang="less" src="./login.less"></style>
<script>
export default {
  data () {
    return {
      formName: { // 表单中的参数
        user: '',
        userError: '',
        password: '',
        passwordError: '',
        beDisabled: true
      },
      beShow: false, // 传值给父组件
      count: 0
    }
  },
  methods: {
    resetForm() {
      this.formName.user = ''
      this.formName.userError = ''
      this.formName.password = ''
      this.formName.passwordError = ''
    },
    submitForm(formName) {
      var user = this.formName.user
      var password = this.formName.password
      console.log(user, password)
      // ajax 是否登录成功
    },
    inputBlur(errorItem, inputContent) {
      if (errorItem === 'user') {
        if (inputContent === '') {
          this.formName.userError = '用户名不能为空'
        } else {
          this.formName.userError = ''
        }
      } else if (errorItem === 'password') {
        if (inputContent === '') {
          this.formName.passwordError = '密码不能为空'
        } else {
          this.formName.passwordError = ''
        }
      }
      // 对于按钮的状态进行修改
      if (this.formName.user !== '' && this.formName.password !== '') {
        this.formName.beDisabled = false
      } else {
        this.formName.beDisabled = true
      }
    },
    showLogin() {
      !this.count && this.count++
      console.log(this.count)
    }
  }
}

</script>
