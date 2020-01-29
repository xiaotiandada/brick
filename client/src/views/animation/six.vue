<template>
  <div>
    <div class="spacer">
      <h1>This section is just a spacer</h1>
    </div>

    <div id="stage">
      <div class="box box1">1</div>
      <div class="box box2">2</div>
      <div class="box box3">3</div>
      <div class="box box4">4</div>
      <div class="box box5">5</div>
      <div class="box box6">6</div>
    </div>

    <div id="stage1">
      <div class="box box1">1</div>
      <div class="box box2">2</div>
      <div class="box box3">3</div>
      <div class="box box4">4</div>
      <div class="box box5">5</div>
      <div class="box box6">6</div>
    </div>
    <div class="spacer">
      <h1>This section is just a spacer</h1>
    </div>
  </div>
</template>

<script>
export default {
  // https://greensock.com/scrollmagic/
  mounted() {
    this.stage();
    this.stage1();
  },
  methods: {
    stage() {
      var controller = new ScrollMagic.Controller();
      let tl = new TimelineMax();
      tl.staggerFrom("#stage .box", 1.25, {
        scale: 0,
        cycle: {
          y: [-50, 50]
        },
        ease: Elastic.easeOut,
        // https://codepen.io/GreenSock/full/jdawKx
        stagger: {
          from: "center",
          amount: 0.25
        }
      });

      var scene = new ScrollMagic.Scene({
        triggerElement: "#stage",
        triggerHook: 0
      })
        .addIndicators({
          colorTrigger: "white",
          colorStart: "white",
          colorEnd: "white",
          indent: 5
        })
        .setTween(tl)
        .addTo(controller);
    },
    stage1() {
      var controller = new ScrollMagic.Controller();
      let tl = new TimelineMax();
      tl.staggerFrom("#stage1 .box", 1.5, {
        scale: 0,
        cycle: {
          y: [-50, 50]
        },
        ease: Linear.easeNone,
        // https://codepen.io/GreenSock/full/jdawKx
        stagger: {
          from: "center",
          amount: 0.75
        }
      });

      var scene = new ScrollMagic.Scene({
        triggerElement: "#stage1",
        duration: "50%",
        triggerHook: 0
      })
        .addIndicators({
          colorTrigger: "white",
          colorStart: "white",
          colorEnd: "white",
          indent: 5
        })
        .setTween(tl)
        .addTo(controller);
    }
  }
};
</script>

<style lang="less" scoped>
h1 {
  color: white;
  margin: 0;
}

#stage,
#stage1 {
  height: 100vh;
  width: 100%;
  background: #262626;
  display: flex;
  justify-content: center;
  align-items: center;
}
#stage1 {
  background: #462b2b;
}
.spacer {
  width: 100%;
  height: 100vh;
  background: #5386b2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  height: 60px;
  width: 60px;
  align-items: center;
  margin: 4px;
  font-size: 1.2em;
  font-weight: 700;
  color: white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.box1 {
  background-color: #84c186;
}

.box2 {
  background-color: #8b6c4c;
}

.box3 {
  background-color: #39a3ee;
}

.box4 {
  background-color: #ef9144;
}

.box5 {
  background-color: #cd58eb;
}

.box6 {
  background-color: #b84b4b;
}
</style>
