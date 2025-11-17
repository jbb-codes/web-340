/**
 * Author: Jarren Bess
 * Date: Nov 16, 2025
 * File Name: taco-stand.js
 * Description: Class to emit Taco stand events
 */

"use strict";

const EventEmitter = require("events");

class TacoStandEmitter extends EventEmitter {
  constructor() {
    super();
  }

  serveCustomer(customer) {
    this.emit("serve", customer);
  }

  prepareTaco(taco) {
    this.emit("prepare", taco);
  }

  handleRush(rush) {
    this.emit("rush", rush);
  }
}

module.exports = TacoStandEmitter;
