<template>
  <div class="zcool">
    <a
      v-for="(item, idx) in list"
      :key="idx"
      class="box"
      :href="item.href"
      target="_blank"
    >
      <img :src="item.url" :alt="item.title" />
      <p>{{ item.title }}</p>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      await this.$API
        .test()
        .then(res => {
          console.log(res);
          if (res.code === 0) {
            this.list = res.data.list;
          } else this.$Message.error(res.message);
        })
        .catch(err => {
          console.log(err);
          this.$Message.error(res.message);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.zcool {
  padding: 20px;
  background-color: #f4f4f4;
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
</style>
