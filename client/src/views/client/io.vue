<template>
  <div class="main">
    <div class="room">
      <div v-for="(item, index) in chat" :key="index">
        <div v-if="item.action === 'chat'" class="chat">
          <avatar :size="40" :username="item.id"></avatar>
          <div class="chat-message">{{ item.message }}</div>
        </div>
        <div v-if="item.action === 'join'" class="join">
          {{ item.id }}加入聊天室
        </div>
        <div v-if="item.action === 'leave'" class="join">
          {{ item.id }}离开了聊天室
        </div>
      </div>
    </div>
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
      v-model="message"
    >
    </el-input>
    <el-button @click="sendMessage" class="send" type="primary">发送</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Avatar from "vue-avatar";
import io from "socket.io-client";
let socket: any = null;

@Component({
  components: {
    Avatar
  }
})
export default class Likes extends Vue {
  private message: string = "";
  private sidebar: Boolean = true;
  private chat: Array<object> = [];

  created() {
    this.socketFun();
  }
  private socketFun() {
    socket = io("http://127.0.0.1:7001", {
      // 实际使用中可以在这里传递参数
      query: {
        room: this.$route.query.room || "demo",
        userId: `client_${Math.random()}`
      },

      transports: ["websocket"]
    });
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
      this.chat.push(res);
    });
    // 接收在线用户信息
    socket.on("online", (msg: any) => {
      log("#online,", msg);
      // 格式化一下 push
      this.chat.push({
        action: msg.action,
        id: msg.id
      });
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

  private sendMessage() {
    const id = socket.id;
    let data = {
      id,
      target: id,
      payload: {
        msg: this.message
      }
    };
    socket.emit("exchange", data);
    this.message = "";
  }
}
</script>

<style lang="less" scoped>
.likes {
  padding: 20px;
}
.message {
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  padding: 20px;
  box-sizing: border-box;
  min-height: 200px;
  max-height: 500px;
  overflow: auto;
  p {
    padding: 0;
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
  }
  .success {
    color: #008000;
  }
  .fail {
    color: #f00;
  }
}

.main {
  max-width: 600px;
  margin: 40px auto 0;
  padding: 20px;
  box-sizing: border-box;
}
.send {
  display: block;
  width: 100%;
  margin: 10px 0;
}
.room {
  width: 100%;
  height: 500px;
  margin: 10px 0 20px;
  border: 1px solid #dcdcdc;
  padding: 10px;
  box-sizing: border-box;
  overflow: auto;
  .chat {
    display: flex;
    align-items: center;
    margin: 10px 0;

    &-message {
      max-width: 100px;
      background-color: #3f9eff;
      color: #fff;
      border-radius: 3px;
      padding: 6px 10px;
      font-size: 16px;
      margin: 0 0 0 10px;
      position: relative;
      &::after {
        content: "";
        display: block;
        width: 0;
        height: 0;
        /* background-color: #3f9eff; */
        position: absolute;
        left: -12px;
        top: 8px;
        border: 6px solid #3f93ff;
        border-color: transparent #3f93ff transparent transparent;
      }
    }
  }
  .join {
    background-color: #cdcdcd;
    color: #000;
    display: block;
    text-align: center;
    margin: 10px 20px;
    // width: 30%;
    // text-overflow: ellipsis;
    // white-space: nowrap;
    // overflow: hidden;
    border-radius: 20px;
    padding: 6px 10px;
    font-size: 14px;
  }
}
</style>
