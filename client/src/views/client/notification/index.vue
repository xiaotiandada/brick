<template>
  <div>
    <ul>
      <h3>目前做法(当前只有系统通知)</h3>
      <li>1、铃铛🔔红点主动请求服务端, 去查uid是否已经阅读完所有的消息</li>
      <li>2、消息记录请求接口</li>
      <li>3、消息通知 socket.io 监听事件</li>
      <li>4、进入系统消息 主动发送阅读操作</li>
      <li>后续我还要想想, 有点难搞....</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Notification extends Vue {}
</script>

<style lang="less" scoped></style>
