<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class App extends Vue {
  created() {
    // 获取通知权限
    window.addEventListener("load", function() {
      // @ts-ignore
      Notification.requestPermission(function(status: string) {
        // This allows to use Notification.permission with Chrome/Safari
        // @ts-ignore
        if (Notification.permission !== status) {
          // @ts-ignore
          Notification.permission = status;
        }
      });
    });
  }
}
</script>

<style lang="less">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
