<template>
  <div class="main">
    test
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import io from "socket.io-client";
let socket: any = io("ws://121.40.165.18:8800", {
  transports: ["websocket"]
});
@Component
export default class Likes extends Vue {
  private message: string = "";
  private sidebar: Boolean = true;
  private chat: Array<object> = [];

  created() {
    this.socketFun();
  }
  private socketFun() {
    console.log("go");
    let socket: any = io("http//127.0.0.1:7001");
    const log = console.log;

    socket.on("connect", () => {
      const id = socket.id;

      log("#connect,", id, socket);

      // 监听自身 id 以实现 p2p 通讯
      socket.on(id, (msg: any) => {
        log("#receive,", msg, id);
      });
    });

    socket.on("event", function(data: object) {
      log("event", data);
    });
    socket.on("res", (res: object) => {
      log(93, res);
    });
    socket.on("chat", (res: object) => {
      log("chat: ", res);
    });
    // 系统事件
    socket.on("disconnect", function() {
      log("disconnect");
    });
    socket.on("disconnecting", function() {
      log("disconnecting");
    });
    socket.on("error", () => {
      log("error");
    });
    (window as any).socket = socket;
  }
}
</script>
