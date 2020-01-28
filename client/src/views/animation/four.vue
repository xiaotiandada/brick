<template>
  <div class="list">
    <div
      class="list-item"
      v-for="item in 100"
      :key="item"
      :style="{ transitionDelay: item + 100 + 'ms' }"
    >
      {{ item }}
    </div>
  </div>
</template>

<style lang="less" scoped>
// 适合一个个轮流展示的那种 bilibili style
// 他是随机一个1-400ms的 行内 style transition-delay use js
// 再想想
.list {
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  &-item {
    width: 180px;
    height: 70px;
    background: #f1f1f1;
    border: 1px solid #333;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    zoom: 1;
    transition: 0.3s;
    opacity: 1;
  }
}
</style>
