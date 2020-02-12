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
    console.log(process.env);
    console.log(process.env.NODE_ENV);
    console.log(process.env.VUE_APP_API);
    console.log(process.env.VUE_APP_TEST);
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
