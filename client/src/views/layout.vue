<template>
  <el-row class="layout">
    <el-col :span="4" class="sidebar">
      1
    </el-col>
    <el-col :span="20" class="main">
      <div class="header">
        1
      </div>
      <div class="container">
        <router-view></router-view>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Layout extends Vue {}
</script>

<style lang="less" scoped>
.layout,
.sidebar,
.main {
  height: 100%;
}
.sidebar {
  background-color: rgb(29, 135, 235);
}

.main {
}
.header {
  height: 60px;
  background-color: rgb(27, 109, 163);
}
.container {
  background-color: #eee;
  height: calc(100% - 60px);
}
</style>
