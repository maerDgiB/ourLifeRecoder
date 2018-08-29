<template>
  <div class="loginbox">
    <h1>登录</h1>
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
</template>
<style>
.loginbox {
  width: 300px;
  min-height: 300px;
  padding: 20px;
  margin: 4em auto 0;
  border-radius: 8px;
  box-shadow: 0 0 8px #999;
  box-sizing: border-box;
}

.loginbox h1 {
  text-align: center;
  margin: 0;
}

.loginbox p {
  color: red;
  float: left;
  line-height: 0;
}

.el-form .el-form-item {
  margin-bottom: 6px;
}
.upbtn{
	margin: 0 20px 0 40px;
}

</style>
<script>
export default {
  data() {
    return {
      formName: { //表单中的参数
        user: '',
        userError: '',
        password: '',
        passwordError: '',
        beDisabled: true
      },
      beShow: false //传值给父组件
    }
  },
  methods: {
    resetForm: function() {
      this.formName.user = '';
      this.formName.userError = '';
      this.formName.password = '';
      this.formName.passwordError = '';
    },
    submitForm: function(formName) {
      var user = this.formName.user,
        password = this.formName.password;
      console.log(user, password)
      //ajax 是否登录成功

    },
    inputBlur: function(errorItem, inputContent) {
      if (errorItem === 'user') {
        if (inputContent === '') {
          this.formName.userError = '用户名不能为空'
        } else {
          this.formName.userError = '';
        }
      } else if (errorItem === 'password') {
        if (inputContent === '') {
          this.formName.passwordError = '密码不能为空'
        } else {
          this.formName.passwordError = '';
        }
      }
      //对于按钮的状态进行修改
      if (this.formName.user != '' && this.formName.password != '') {
        this.formName.beDisabled = false;
      } else {
        this.formName.beDisabled = true;
      }
    }
  }
}

</script>
