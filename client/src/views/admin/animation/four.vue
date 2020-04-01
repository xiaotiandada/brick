<template>
  <div>
    <h1 class="animation-title">Bilibili list</h1>
    <transition-group tag="div" class="list" name="timeline-appear">
      <div
        class="list-item"
        v-for="item in list"
        :key="item"
        :style="{ transitionDelay: delay() + 'ms' }"
      >
        {{ item }}
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: 0
    };
  },
  created() {
    setTimeout(() => {
      this.list = 20;
    }, 300);
  },
  methods: {
    delay() {
      return Math.floor(Math.random() * 400) + 1;
    }
  }
};
</script>

<style lang="less" scoped>
//  bilibili list
// random 1-400ms, style transition-delay
// css scale0.9 - 1, opacity 0
//  use transition-group show animation
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
  }
}

.timeline-appear-enter-active,
.timeline-appear-leave-active {
  transition: all 0.4s;
}

.timeline-appear-enter,
.timeline-apper-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
