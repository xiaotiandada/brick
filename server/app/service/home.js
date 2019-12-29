'use strict';
const Service = require('egg').Service;

class Home extends Service {
  /**
   * sayHi to you
   * @param name - your name
   */
  async sayHi(name) {
    return `hi, ${name} ???`;
  }
}

module.exports = Home;
