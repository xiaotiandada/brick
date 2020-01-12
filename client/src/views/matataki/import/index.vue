<template>
  <div class="post">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-form-item label="" prop="token">
        <el-input
          placeholder="请输入你的平台Token"
          v-model="ruleForm.token"
        ></el-input>
      </el-form-item>
      <el-form-item label="" prop="url">
        <el-input
          placeholder="请输入地址,包含http(s)://"
          v-model="ruleForm.url"
        ></el-input>
      </el-form-item>
      <p class="tip">目前支持：链闻、橙皮书、微信、简书文章。</p>
      <el-form-item>
        <div class="btn">
          <el-button type="primary" @click="importPost('ruleForm')"
            >立即发布</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    let httpTest = (rule, value, callback) => {
      if (new RegExp("[a-zA-z]+://[^\\s]*").test(this.ruleForm.url)) {
        callback();
      } else {
        callback(new Error("请输入包含http(s)://的链接地址"));
      }
    };
    return {
      ruleForm: {
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI5NTI4MjIzOTlAcXEuY29tIiwiZXhwIjoxNTc5NDE2MTE2NTA2LCJwbGF0Zm9ybSI6ImVtYWlsIiwiaWQiOjEwNTN9.vM3SRhYLYS69L14rity5Bi17gZyeGMyIwYuJwssXLdM",
        url: ""
      },
      rules: {
        token: [
          {
            required: true,
            message: "不能为空",
            trigger: "change"
          }
        ],
        url: [
          {
            required: true,
            message: "不能为空",
            trigger: "change"
          },
          {
            validator: httpTest,
            message: "请输入地址,包含http(s)://",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    setpFunc(formName) {
      return new Promise(resolve =>
        this.$refs[formName].validate(valid => resolve(valid))
      );
    },
    async importPost(formName) {
      if (await this.setpFunc(formName)) {
        await this.$API
          .postImport({
            url: this.ruleForm.url,
            token: this.ruleForm.token
          })
          .then(res => {
            this.postPublish({
              title: res.data.title,
              cover: res.data.cover,
              content: res.data.content,
              token: this.ruleForm.token
            });
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    async postPublish({ title, cover, content, token }) {
      await this.$API
        .postPublish({
          title,
          cover,
          content,
          token
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.post {
  padding: 20px;
  .tip {
    font-size: 14px;
    color: #333;
    padding: 0;
    margin: 0;
  }
  .btn {
    margin-top: 40px;
  }
}
</style>
