<template>
  <div class="zcool" v-loading="loading">
    <a
      v-for="item in list"
      :key="item.href"
      class="box"
      :href="item.href"
      target="_blank"
    >
      <img :src="item.url" :alt="item.title" />
      <p>{{ item.title }}</p>
    </a>

    <div class="pagination">
      <el-pagination
        background
        :hide-on-single-page="true"
        layout="prev, pager, next"
        :current-page="Number(nowIdx)"
        @prev-click="togglePrevPage"
        @next-click="toggleNextPage"
        @current-change="togglePage"
        :total="1000"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      nowIdx: this.$route.query.page || 1,
      maxIdx: 100,
      loading: false
    };
  },
  watch: {
    nowIdx() {
      this.$router.push({
        name: this.$route.name,
        query: {
          page: this.nowIdx
        }
      });
    }
  },
  created() {
    this.init(this.nowIdx);
  },
  methods: {
    async init(page = 1) {
      this.loading = true;
      await this.$API
        .getZcool({
          page
        })
        .then(res => {
          console.log(res);
          if (res.code === 0) {
            this.list = res.data.list;
          } else this.$Message.error(res.message);
        })
        .catch(err => {
          console.log(err);
          this.$Message.error(res.message);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    togglePrevPage() {
      if (this.nowIdx > 1) {
        this.nowIdx--;
        this.init(this.nowIdx);
      }
    },
    toggleNextPage() {
      if (this.nowIdx < this.maxIdx) {
        this.nowIdx++;
        this.init(this.nowIdx);
      }
    },
    togglePage(i) {
      this.nowIdx = i;
      this.init(this.nowIdx);
    }
  }
};
</script>

<style lang="less" scoped>
.zcool {
  padding: 20px;
  background-color: #eaeaea;
}
.box {
  display: inline-block;
  width: calc(20% - 40px);
  height: 200px;
  border-radius: 4px;
  margin: 20px;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;
  text-decoration: none;
  &:hover {
    transform: scale(1.04);
  }
  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
  p {
    font-size: 14px;
    color: #333;
    padding: 0;
    margin: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
.pagination {
  text-align: center;
  margin-top: 20px;
}
</style>
