<template>
  <div class="layout">
    <div class="sidebar" :class="sidebar && 'open'">
      1
    </div>
    <div class="main" :class="sidebar && 'open'">
      <div class="header">
        1
        <el-button @click="sidebar = !sidebar">Sidebar</el-button>

      </div>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Layout extends Vue {
  data() {
    return {
      sidebar: true
    }
  }
}
</script>

<style lang="less" scoped>
.layout,
.sidebar,
.main {
  height: 100%;
}
.layout {
  position: relative;
}
.sidebar {
  background-color: rgb(29, 135, 235);
  position: fixed;
  top: 0;
  bottom: 0;
  left: -220px;
  width: 220px;
  transition: all .2s;
  &.open {
    left: 0;
  }
}

.main {
  position: absolute;
  left: 0;
  width: 100%;
  transition: all .2s;
  &.open {
    width: calc(100% - 220px);
    left: 220px;
  }
}
.header {
  height: 60px;
  background-color: rgb(27, 109, 163);
}
.container {
  min-height: calc(100% - 60px);
}
</style>
