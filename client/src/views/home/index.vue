<template>
  <div class="home">
    <div class="screen">
      <h1 class="home-title">Hi !</h1>
      <a href="javascript:;">Go</a>
    </div>
    <div class="screen">
      <h1 class="home-title">Hi !</h1>
      <a href="javascript:;">Go</a>
    </div>
    <div class="screen">
      <h1 class="home-title">Hi !</h1>
      <a href="javascript:;">Go</a>
    </div>
    <div class="screen">
      <h1 class="home-title">Hi !</h1>
      <a href="javascript:;">Go</a>
    </div>
  </div>
</template>

<style lang="less" scoped>
.screen {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    padding: 0;
    margin: 0;
    color: #fff;
    font-size: 70px;
    font-weight: bold;
  }
  a {
    display: block;
    text-align: center;
    text-decoration: none;
    padding: 10px 40px;
    color: #333;
    margin: 20px 0 0 0;
    font-size: 16px;
    border: 1px solid #fff;
    background: #fff;
    box-sizing: border-box;
    transition: all 0.2s;
    &:hover {
      border: 1px solid #fff;
      color: #fff;
      background: transparent;
    }
  }
  &:nth-of-type(1) {
    background: rgb(29, 153, 202);
  }
  &:nth-of-type(2) {
    background: rgb(80, 80, 80);
  }
  &:nth-of-type(3) {
    background: rgb(70, 60, 60);
  }
  &:nth-of-type(4) {
    background: rgb(107, 57, 57);
  }
}
</style>
