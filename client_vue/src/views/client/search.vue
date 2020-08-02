<template>
  <div class="container">
    <div class="search">
      <el-input v-model="word" placeholder="请输入搜索内容" class="input"></el-input>
      <el-button class="btn" type="primary" @click="search">搜索</el-button>
    </div>

    <ul class="item">
      <li v-for="(item, index) in pull.list" :key="index">
        country: {{ item.country }}<br>
        name: {{ item.name }}<br>
        lat: {{ item.lat }}<br>
        lng: {{ item.lng }}<br>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Search extends Vue {
  private word: string | string[] = "";
  private pull: { count: number; list: [] } = {
    count: 0,
    list: []
  };

  create() {
    let { wd } = this.$route.query;
    if (wd) {
      this.word = wd;
    }
  }

  private search(): void {
    let params = {
      wd: this.word
    };
    console.log("word", this.word);
    axios
      .get("http://127.0.0.1:7001/api/search", {
        params: params
      })
      .then(res => {
        console.log("res", res);
        if (res.status === 200 && res.data.code === 0) {
          let { list, count } = res.data.data;

          this.pull.list.length = 0;

          this.pull.count = count;
          this.pull.list = list;
        }
      })
      .catch(err => {
        console.log("err", err);
      });
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 0 100px;
  .search {
    margin: 100px 0 0;
    display: flex;
    align-items: center;
    .input {
      flex: 1;
    }
    .btn {
      margin-left: 10px;
    }
  }

  .item {
    margin: 20px 0 0;
    padding: 0;
    list-style: none;
    li {
      margin: 10px 0;
      border: 1px solid rgb(202, 202, 202);
      padding: 20px;
      box-sizing: border-box;
    }
  }
}
</style>