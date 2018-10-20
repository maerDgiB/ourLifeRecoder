<template>
  <el-header>
    <span>便当流水记录</span>
    <div class="left-wrapper">
      <span class="user-name">{{userName}}</span>
      <el-button class="quit" @click="quit">注销</el-button>
    </div>
  </el-header>
</template>
<style lang="less" src='./header.less'></style>
<script>
export default {
  data () {
    return {
      userName: localStorage.getItem('userName')
    }
  },
  methods: {
    quit: function () {
      this.$confirm('是否注销?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          localStorage.removeItem('token')
          this.$message({
            type: 'success',
            message: '注销成功!'
          })
          this.$router.push({path: '/'})
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消注销'
          })
        })
    }
  }
}
</script>
