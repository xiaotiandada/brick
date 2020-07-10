<template>
  <div>
    <section>
      <div class="outer">
        <div class="inner">This is Section 1</div>
      </div>
    </section>
    <section>
      <div class="outer">
        <div class="inner">This is Section 2</div>
      </div>
    </section>
    <section>
      <div class="outer">
        <div class="inner">This is Section 3</div>
      </div>
    </section>
    <section>
      <div class="outer">
        <div class="inner">This is Section 4</div>
      </div>
    </section>
    <section>
      <div class="outer">
        <div class="inner">This is Section 5</div>
      </div>
    </section>
    <section>
      <div class="outer">
        <div class="inner">This is Section 6</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  // https://greensock.com/scrollmagic/
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let section = document.querySelectorAll("section");
      var controller = new ScrollMagic.Controller();

      section.forEach((el, i) => {
        let outer = el.querySelectorAll(".outer");
        let inner = el.querySelectorAll(".inner");

        let tl = new TimelineMax();
        tl.from(outer, 0.25, { scaleX: 0 });
        // yPercent or y ?? 有什么区别???
        // https://greensock.com/get-started/
        tl.from(inner, 0.65, { yPercent: 100, ease: Back.easeOut });

        new ScrollMagic.Scene({
          triggerElement: el,
          triggerHook: 0.15
        })
          .setTween(tl)
          .addIndicators({
            colorTrigger: "white",
            colorStart: "white",
            colorEnd: "white",
            indent: 5
          })
          .addTo(controller);
      });
    }
  }
};
</script>

<style lang="less" scoped>
section {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
}

.inner {
  position: relative;
}
.outer {
  border-bottom: solid white 2px;
  overflow: hidden;
}

section:nth-child(1) {
  background-color: #84c186;
}
section:nth-child(2) {
  background-color: #8b6c4c;
}
section:nth-child(3) {
  background-color: #39a3ee;
}
section:nth-child(4) {
  background-color: #ef9144;
}
section:nth-child(5) {
  background-color: #cd58eb;
}
section:nth-child(6) {
  background-color: #b84b4b;
}
</style>
