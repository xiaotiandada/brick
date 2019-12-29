<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <Layout></Layout>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import Layout from "./views/layout.vue";

@Component({
  components: {
    HelloWorld,
    Layout
  }
})
export default class App extends Vue {
  created() {
    axios.get("http://127.0.0.1:7001/").then(res => {
      console.log("res", res);
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
