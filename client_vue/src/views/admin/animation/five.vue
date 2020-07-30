<template>
  <div>
    <h1 class="animation-title">velocity js</h1>
    <button @click="show = !show">
      Toggle
    </button>
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      v-bind:css="false"
    >
      <p v-if="show">
        Demo
      </p>
    </transition>
  </div>
</template>

<script>
// velocity js
import Velocity from "velocity-animate";
export default {
  data: function() {
    return {
      show: false
    };
  },
  methods: {
    beforeEnter: function(el) {
      // el.style.opacity = 0;
    },
    enter: function(el, done) {
      Velocity(
        el,
        {
          fontSize: "30px"
        },
        { complete: done }
      );
    },
    leave: function(el, done) {
      Velocity(
        el,
        {
          fontSize: "initial"
        },
        { complete: done }
      );
    }
  }
};
</script>
