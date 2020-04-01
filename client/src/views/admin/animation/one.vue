<template>
  <div>
    <h1 class="animation-title">Vue list show</h1>

    <button @click="add">add</button>
    <button @click="remove">remove</button>
    <button @click="shuffle">shuffle</button>
    <transition-group tag="div" class="list" name="list">
      <div class="list-item" v-for="item in list" :key="item">{{ item }}</div>
    </transition-group>
  </div>
</template>

<script>
import shuffle from "lodash/shuffle";
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    };
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.list.length);
    },
    add() {
      this.list.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove() {
      this.list.splice(this.randomIndex(), 1);
    },
    shuffle() {
      this.list = shuffle(this.list);
    }
  }
};
</script>

<style lang="less" scoped>
// vue 官方例子 transition-group
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
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-move {
  transition: transform 1s;
}
</style>
