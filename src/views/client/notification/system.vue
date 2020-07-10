<template>
  <div>
    <div
      class="main-block"
      v-for="(item, index) in notificationList"
      :key="index"
    >
      <span>{{ item.message }}</span>
      <span>{{ time(item.create_time) }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import io from "socket.io-client";
import moment from "moment";
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
  private notificationList: Array<object> = [];
  private uid: string = "1";

  private handleSelect(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
  private handleClick(tab: any, event: any) {
    console.log(tab, event);
  }
  created() {
    this.getNotificationList();
  }
  mounted() {
    this.notificationRead();
  }
  private async getNotificationList() {
    // @ts-ignore
    await this.$API
      .getNotification({
        type: "system"
      })
      .then((res: any) => {
        if (res.code === 0) {
          this.notificationList = res.data;
        }
      });
  }
  private time(time: string) {
    return moment(time).format("YYYY-MM-DD HH:mm:ss");
  }
  private async notificationRead() {
    const uid: any = document.querySelector("#notificationId");
    // @ts-ignore
    await this.$API.notificationRead({
      uid: uid.value
    });
  }
}
</script>

<style lang="less" scoped>
.main-block {
  max-width: 700px;
  width: 90%;
  padding: 20px 10px;
  background-color: #fff;
  margin-bottom: 10px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
