<template>
  <div>
    <div class="spacer">Just a spacer</div>
    <div class="wrapper">
      <div class="parent">
        <div class="child"></div>
      </div>
    </div>

    <div class="wrapper">
      <div class="parent">
        <div class="child"></div>
      </div>
    </div>

    <div class="wrapper">
      <div class="parent">
        <div class="child"></div>
      </div>
    </div>

    <div class="wrapper">
      <div class="parent">
        <div class="child"></div>
      </div>
    </div>

    <div class="spacer end">Just a spacer</div>
  </div>
</template>

<script>
// https://greensock.com/scrollmagic/
export default {
  mounted() {
    var controller = new ScrollMagic.Controller();

    let wrapper = document.querySelectorAll(".wrapper");
    wrapper.forEach((el, i) => {
      var tl = new TimelineMax();
      var child = el.querySelectorAll(".child");
      tl.to(child, 1, { y: -180, ease: Linear.easeNone });

      var scene = new ScrollMagic.Scene({
        triggerElement: el,
        triggerHook: 0.4,
        duration: "100%"
      })
        .setTween(tl)
        .addIndicators({
          colorTrigger: "black",
          colorStart: "black",
          colorEnd: "black",
          indent: 10
        })
        .addTo(controller);
    });
  }
};
</script>

<style lang="less" scoped>
.spacer {
  background-color: #cd58eb;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2em;
}

.wrapper {
  width: 300px;
  height: 300px;
  position: relative;
  margin: 60px auto;
}

.parent,
.child {
  position: absolute;
  border-radius: 8px;
}

.parent {
  width: 100%;
  height: 100%;
  background: black;
}

.child {
  width: 200px;
  height: 100px;
  background: #42a6e0;
  right: -50px;
  bottom: -20px;
}
</style>
