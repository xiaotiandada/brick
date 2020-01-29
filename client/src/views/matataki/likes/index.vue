<template>
  <div class="likes">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-form-item label prop="token">
        <el-input placeholder="请输入你的平台Token" v-model="ruleForm.token"></el-input>
      </el-form-item>
      <el-form-item label prop="firstId">
        <el-input placeholder="请输入开始Id" v-model="ruleForm.firstId"></el-input>
      </el-form-item>
      <el-form-item label prop="lastId">
        <el-input placeholder="请输入结束Id" v-model="ruleForm.lastId"></el-input>
      </el-form-item>
      <el-form-item>
        <div class="btn">
          <el-button @click="start('ruleForm')">开始关注</el-button>
          <el-button>取消关注</el-button>
        </div>
      </el-form-item>
    </el-form>

    <div class="message">
      <p 
        v-for="(item, index) in chat" 
        :key="index" 
        :class="item.code === 0 ? 'success' : 'fail'">
        {{item.message}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import io from "socket.io-client";
const socket = io("http://127.0.0.1:7001");
@Component
export default class Likes extends Vue {
  private sidebar: Boolean = true;
  private chat: string[] = [];

  private ruleForm = {
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI5NTI4MjIzOTlAcXEuY29tIiwiZXhwIjoxNTc5NDE2MTE2NTA2LCJwbGF0Zm9ybSI6ImVtYWlsIiwiaWQiOjEwNTN9.vM3SRhYLYS69L14rity5Bi17gZyeGMyIwYuJwssXLdM",
    firstId: 1,
    lastId: 10
  };
  private rules = {
    token: [
      {
        required: true,
        message: "不能为空",
        trigger: "change"
      }
    ],
    firstId: [
      {
        required: true,
        message: "不能为空",
        trigger: "change"
      }
    ],
    lastId: [
      {
        required: true,
        message: "不能为空",
        trigger: "change"
      }
    ]
  };

  created() {
    socket.on("connect", function() { console.log('connect') });
    socket.on("event", function(data) {});
    socket.on("disconnect", function() {});
    socket.on("res", res => {
      console.log(res);
      this.chat.push(res);
    });
  }
  private setpFunc(formName) {
    return new Promise(resolve =>
      this.$refs[formName].validate(valid => resolve(valid))
    );
  }
  private async start(formName) {
    if (await this.setpFunc(formName)) {
      socket.emit("chat", {
        token: this.ruleForm.token,
        firstId: this.ruleForm.firstId,
        lastId: this.ruleForm.lastId,
      });
    }
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
</style>
