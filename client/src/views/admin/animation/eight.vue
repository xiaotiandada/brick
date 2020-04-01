<template>
  <div>
    <section class="spacer">Content</section>
    <div id="pinMaster">
      <div id="pinContainer">
        <section class="panel dark">
          Pin Panel A
        </section>
        <section class="panel turqoise">
          Pin Panel B
        </section>
        <section class="panel bordeaux">
          Pin Panel C
        </section>
        <section class="panel bordeaux1">
          Pin Panel D
        </section>
      </div>
      <section class="spacer">Content</section>
      <footer>Footer</footer>
    </div>
  </div>
</template>

<script>
// https://greensock.com/scrollmagic/
export default {
  mounted() {
    var controller = new ScrollMagic.Controller();
    var tl = new TimelineMax();

    tl.fromTo(
      "section.panel.turqoise",
      1,
      {
        yPercent: 100
      },
      {
        yPercent: 0,
        ease: Linear.easeNone
      },
      "+=1"
    );

    tl.fromTo(
      "section.panel.bordeaux",
      1,
      {
        xPercent: 100
      },
      {
        xPercent: 0,
        ease: Linear.easeNone
      },
      "+=1"
    );
    tl.fromTo(
      "section.panel.bordeaux1",
      1,
      {
        xPercent: 100
      },
      {
        xPercent: 0,
        ease: Linear.easeNone
      },
      "+=1"
    );

    new ScrollMagic.Scene({
      triggerElement: "#pinMaster",
      triggerHook: "onLeave",
      duration: "100%"
    })
      .setPin("#pinMaster")
      .setTween(tl)
      .addIndicators({
        colorTrigger: "white",
        colorStart: "white",
        colorEnd: "white",
        indent: 40
      })
      .addTo(controller);
  }
};
</script>

<style lang="less" scoped>
/* #placeholder1 {
  height: 100vh;
  background-color: grey;
} */

#pinContainer {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

section,
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 700;
}
.panel {
  height: 100%;
  width: 100%;
  position: absolute;
}

#pinMaster {
  position: relative;
}

footer {
  height: 100px;
  background-color: gray;
}

.spacer {
  height: 100vh;
  background-color: #42a6e0;
}

.dark {
  background-color: #262626;
}
.turqoise {
  background-color: #38ced7;
}
.brown {
  background-color: #a66f28;
}
.bordeaux {
  background-color: #953543;
}
.bordeaux1 {
  background-color: #b2cf0f;
}
</style>
