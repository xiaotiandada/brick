<template>
  <div class="layout">
    <template v-if="status">
      <div class="sidebar" :class="sidebar && 'open'">
        <sidebar></sidebar>
      </div>
      <div class="main" :class="sidebar && 'open'">
        <div class="header">
          <el-button @click="sidebar = !sidebar">又不是不能用</el-button>
        </div>
        <div class="container">
          <router-view></router-view>
        </div>
      </div>
    </template>
    <template v-else>
      <router-view></router-view>
    </template>
    <maximize @toggleStatus="toggleStatus" :status="status"></maximize>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import sidebar from "./components/sidebar.vue";
import maximize from "./components/maximize.vue";
@Component({
  components: {
    sidebar,
    maximize
  }
})
export default class Layout extends Vue {
  private sidebar: Boolean = true;
  private status: Boolean =
    localStorage.getItem("maximize") === "true" ? true : false;

  private toggleStatus(status: Boolean) {
    this.status = status;
    localStorage.setItem("maximize", String(status));
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
  overflow: auto;
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
