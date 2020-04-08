<template>
  <div class="notification">
    <div class="sticky">
      <div class="header">
        <div class="header-main">
          <el-menu
            :default-active="activeIndex"
            class="menu"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">首页</el-menu-item>
          </el-menu>

          <i
            class="el-icon-message-solid notice"
            :class="status && 'active'"
          ></i>
        </div>
      </div>
      <nav class="nav">
        <div class="nav-main">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户消息" name="first"></el-tab-pane>
            <el-tab-pane label="系统消息" name="second"></el-tab-pane>
          </el-tabs>
        </div>
      </nav>
    </div>
    <div class="main">
      <div class="main-block" v-for="item in 20" :key="item">
        111
      </div>
    </div>

    <div class="fixed">
      <el-button @click="sendSystemNotification('system')">系统消息</el-button>
      <el-button @click="sendSystemNotification('follow')">用户关注</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import io from "socket.io-client";

// 通知数据
interface NotificationType {
  action: string;
  message: string;
}
@Component
export default class Notification extends Vue {
  private activeIndex: string = "1";
  private activeName: string = "second";
  private status: boolean = false;

  private handleSelect(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
  private handleClick(tab: any, event: any) {
    console.log(tab, event);
  }
  created() {
    this.socketFun();
  }
  private socketFun() {
    let socket = io("http://127.0.0.1:7001/notification", {
      // 实际使用中可以在这里传递参数
      query: {
        room: this.$route.query.room || "demo",
        userId: `client_${Math.random()}`
      },

      transports: ["websocket"]
    });
    const log = console.log;

    socket.on("notification", (res: NotificationType) => {
      log("notification: ", res);
      this.status = true;
      this.systemNotification(res);
    });
  }

  // 发送系统消息
  private systemNotification(data: NotificationType) {
    const h = this.$createElement;

    this.$notify({
      title: "系统消息",
      message: h("p", { style: "color: blank" }, data.message)
    });
  }
  private async sendSystemNotification(type: string) {
    let data = {};
    if (type === "follow") {
      data = {
        action: "user",
        type
      };
    } else if (type === "system") {
      data = {
        action: "system"
      };
    } else {
      //
      return;
    }
    console.log(type);
    // @ts-ignore
    await this.$API
      .notification({
        notification: data
      })
      .then((res: object) => {
        console.log(res);
      })
      .catch((e: any) => {
        console.log(e);
      });
  }
}
</script>

<style lang="less" scoped>
.notification {
  min-height: 100%;
  background-color: #f4f5f5;
}
.sticky {
  position: sticky;
  top: 0;
}
.header {
  background-color: #fff;
  &-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 960px;
    width: 90%;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .menu {
  }
  .notice {
    font-size: 24px;
    position: relative;
    cursor: pointer;
    &.active::after {
      position: absolute;
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background-color: #ff2323;
      right: 0px;
      top: 0px;
    }
  }
}
.nav {
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.2s;
  &-main {
    max-width: 960px;
    width: 90%;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
  }
}
.main {
  max-width: 960px;
  width: 90%;
  margin: 20px auto 0;
  padding: 0 20px;
  box-sizing: border-box;
}
.main-block {
  max-width: 700px;
  width: 90%;
  min-height: 160px;
  background-color: #fff;
  margin-bottom: 1.333rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.fixed {
  position: fixed;
  right: 0;
  top: 200px;
}
</style>
