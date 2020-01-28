<template>
  <div class="list">
    <div class="list-item" v-for="item in 100" :key="item">{{ item }}</div>
  </div>
</template>

<style lang="less" scoped>
// 适合一个个轮流展示的那种 css style
.list {
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  &-item {
    width: 80px;
    height: 80px;
    background: #f1f1f1;
    border: 1px solid #333;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    animation: 0.3s ease-in-out top forwards;
    opacity: 0;
  }
}

@keyframes top {
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

.loop(@n) when (@n > 0) {
  .list-item:nth-of-type(@{n}) {
    animation-delay: (@n * 0.1s);
  }
  .loop(@n - 1);
}
.loop(100);
</style>
