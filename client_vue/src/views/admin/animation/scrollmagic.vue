<template>
  <div id="element">
    <div class="head">
      <h1>Hello World</h1>
    </div>
    <div class="box box1"></div>
    <div class="bcg-parallax">
      <div class="bcg"></div>
      <div class="content-wrapper">
        <h1>Hi baljdslfjalds adjsf asd fasd a</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          architecto, officiis sit voluptatem assumenda, aperiam ipsa numquam
          eveniet libero ab vero aliquid cumque adipisci accusantium praesentium
          maxime, perspiciatis quis? Laudantium.
        </p>
      </div>
    </div>
    <div class="box box2"></div>
    <div class="box box3"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class App extends Vue {
  mounted() {
    let box = document.querySelectorAll(".box");
    let controller = new ScrollMagic.Controller();

    // 文字
    let parallaxTl = new TimelineMax();
    parallaxTl
      .from(
        ".content-wrapper",
        0.4,
        {
          autoAlpha: 0,
          ease: Power0.easeNone
        },
        0.4
      )
      .from(
        ".bcg",
        2,
        {
          y: "-50%",
          ease: Power0.easeNone
        },
        0
      );

    new ScrollMagic.Scene({
      triggerElement: ".bcg-parallax",
      triggerHook: 1,
      duration: "100%"
    })
      .setTween(parallaxTl)
      .addIndicators()
      .addTo(controller);

    // head
    new ScrollMagic.Scene({
      triggerElement: ".head",
      triggerHook: 0,
      duration: "40%"
    })
      .setPin(".head", { pushFollowers: false })
      .addIndicators()
      .addTo(controller);

    box.forEach((el, i) => {
      new ScrollMagic.Scene({
        triggerElement: el,
        duration: "100%",
        triggerHook: 0.8
      })
        .setClassToggle(el, "width")
        .addIndicators({
          name: "width",
          colorTrigger: "red",
          colorStart: "#333",
          colorEnd: "pink"
        })
        .addTo(controller);
    });
  }
}
</script>

<style lang="less" scoped>
.box {
  height: 500px;
  width: 600px;
  transition: all 0.3s;
  position: relative;
  &.width {
    width: 800px;
  }
}
.head {
  height: 800px;
  background: rgb(88, 236, 224);
  padding: 200px 0 0 0;
  h1 {
    padding: 0;
    margin: 0;
    text-align: center;
    color: #fff;
    font-size: 40px;
  }
}
.box1 {
  background: rgb(218, 20, 20);
}
.box2 {
  background: rgb(212, 96, 96);
}
.box3 {
  background: rgb(72, 170, 85);
}
.box4 {
  background: rgb(35, 97, 177);
}
.box5 {
  background: rgb(133, 35, 136);
}
.box6 {
  background: rgb(141, 41, 74);
}

.bcg-parallax {
  padding: 150px 0;
  color: #fff;
  background-color: #fff;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.bcg {
  background: url("https://miro.medium.com/max/4096/1*_C9Cm5wmhsvACbVq93rdSw.jpeg")
    no-repeat;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 150%;
  top: 0;
  z-index: 1;
  opacity: 0.7;
}

.content-wrapper {
  width: 90%;
  margin: 0 auto;
  max-width: 1140px;
  position: relative;
  z-index: 2;
}
</style>
