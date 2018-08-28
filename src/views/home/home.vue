<template>
  <el-container direction='vertical'>
    <Header></Header>
    <el-container>
      <Aside v-if='false'></Aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Header from '../../components/header/header'
import Aside from '../../components/aside/aside'

export default {
  components: {
    Header,
    Aside
  }
}
</script>
<style lang="less">
</style>
