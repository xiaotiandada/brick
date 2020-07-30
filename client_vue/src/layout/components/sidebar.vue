<template>
  <el-menu
    router
    class="menu"
    @open="handleOpen"
    @close="handleClose"
    :default-active="$route.path"
  >
    <sidebarItem v-for="route in routers" :item="route" :key="route.path">
    </sidebarItem>
  </el-menu>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import sidebarItem from "./sidebar_item.vue";
@Component({
  components: {
    sidebarItem
  }
})
export default class Layout extends Vue {
  private handleOpen(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
  private handleClose(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
  get routers() {
    // console.log(this.$route);
    // console.log(this.$router.options.routes);
    return (this.$router as any).options.routes;
  }
}
</script>
