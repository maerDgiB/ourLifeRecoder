<template>
  <el-header>
    <span>便当流水记录</span>
    <div class="left-wrapper">
      <span class="user-name">{{userName}}</span>
      <el-button class="quit">注销</el-button>
    </div>
  </el-header>
</template>
<script>
export default {
  data () {
    return {
      userName: '林俊杰'
    }
  }
}
</script>
<style lang="less" scoped>
@import './header.less';
</style>
