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
<script lang='ts'>
/* eslint-disable */
import { Vue, Component, Prop } from 'vue-property-decorator'
// import Vue from 'vue'
// import Component from 'vue-class-component'
import Header from '../../components/header/header.vue'
import Aside from '../../components/aside/aside.vue'


@Component({
  components: {
    Header,
    Aside
  }
})
export default class Home extends Vue {
  name:string = 'home'
}
</script>
<style lang="less">
</style>
