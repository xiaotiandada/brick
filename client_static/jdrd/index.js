import { SineWaves } from "sine-waves";
// import throttle from 'lodash/throttle'

// set waves width
const setWavesWidth = () => {
  const waves = document.getElementById("waves");
  const clientWidth =
    document.body.clientWidth || document.documentElement.clientWidth;

  waves.style.width = clientWidth + "px";
  waves.width = clientWidth;
};

// setWavesWidth()

// let resizeEventSetWavesWidth = throttle(setWavesWidth, 50)

// window.addEventListener('resize', resizeEventSetWavesWidth, false)

const setWaves = () => {
  new SineWaves({
    // Canvas Element
    el: document.getElementById("waves"),

    // General speed of entire wave system
    speed: 0.75,

    height: 68,
    width: function() {
      return document.body.clientWidth || document.documentElement.clientWidth;
    },

    // How many degress should we rotate all of the waves
    rotate: 0,

    // Ease function from left to right
    ease: "Linear",

    // Specific how much the width of the canvas the waves should be
    // This can either be a number or a percent
    waveWidth: "400%",

    // An array of wave options
    waves: [
      {
        timeModifier: 1, //速度
        lineWidth: 1, //线条宽度
        amplitude: 30 * window.devicePixelRatio, //波浪高度
        wavelength: 125 * window.devicePixelRatio, //波长
        strokeStyle: "rgba(221,221,233,1)", //颜色
        type: function(x, waves) {
          //自定义波浪类型
          return waves.sine(x); // Combine two together
        }
      },
      {
        timeModifier: 1, //速度
        lineWidth: 1, //线条宽度
        amplitude: 30 * window.devicePixelRatio, //波浪高度
        wavelength: 175 * window.devicePixelRatio, //波长
        strokeStyle: "rgba(221,221,233,1)", //颜色
        type: function(x, waves) {
          //自定义波浪类型
          return waves.sine(x + 8); // Combine two together
        }
      },
      {
        timeModifier: 1, //速度
        lineWidth: 1, //线条宽度
        amplitude: 30 * window.devicePixelRatio, //波浪高度
        wavelength: 175 * window.devicePixelRatio, //波长
        strokeStyle: "#f00", //颜色
        type: function(x, waves) {
          //自定义波浪类型
          return waves.sine(x + 16); // Combine two together
        }
      }
    ],
  });
};

setWaves();
