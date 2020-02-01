<template>
  <div class="component-maximize" @click="toggleStatus(!status)">
    {{ status ? "max" : "min" }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";

@Component
export default class Maximize extends Vue {
  @Prop({
    type: Boolean,
    required: true
  })
  private status!: boolean;

  @Emit("toggleStatus")
  private toggleStatus(status: Boolean) {
    return status;
  }
}
</script>

<style lang="less" scoped>
.component-maximize {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #356da7;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.3);
  position: fixed;
  right: 20px;
  bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  user-select: none;
  &:hover {
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.4);
  }
}
</style>
