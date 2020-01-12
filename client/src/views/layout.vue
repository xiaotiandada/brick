<template>
  <div class="layout">
    <div class="sidebar" :class="sidebar && 'open'">
      <el-menu
        router
        default-active="2"
        class="menu"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>Matataki</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item route="/matataki/import" index="1-1"
              >导入</el-menu-item
            >
            <el-menu-item route="/matataki/likes" index="1-2"
              >关注用户</el-menu-item
            >
                   <el-menu-item route="/matataki/likes" index="1-2"
              >文章点赞</el-menu-item
            >
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2" route="/zcool">
          <i class="el-icon-menu"></i>
          <span slot="title">站酷</span>
        </el-menu-item>
        <el-menu-item index="3" route="/">
          <i class="el-icon-document"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="4" disabled>
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main" :class="sidebar && 'open'">
      <div class="header">
        <el-button @click="sidebar = !sidebar">又不是不能用</el-button>
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
  private sidebar: Boolean = true;
  private handleOpen(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
  private handleClose(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
  private test() {
    console.log(111);
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
  position: fixed;
  top: 0;
  bottom: 0;
  left: -220px;
  width: 220px;
  transition: all 0.2s;
  background-color: #356da7;
  box-sizing: border-box;
  &.open {
    left: 0;
  }
  .menu {
    // border-right: none;
  }
}

.main {
  position: absolute;
  left: 0;
  width: 100%;
  transition: all 0.2s;
  &.open {
    width: calc(100% - 220px);
    left: 220px;
  }
}
.header {
  height: 60px;
  background-color: rgb(27, 109, 163);
  display: flex;
  align-items: center;
  padding: 0 20px;
}
.container {
  min-height: calc(100% - 60px);
}
</style>
