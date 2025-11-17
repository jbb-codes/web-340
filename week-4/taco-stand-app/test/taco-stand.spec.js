/**
 * Author: Jarren Bess
 * Date: Nov 16, 2025
 * File Name: taco-stand.spec.js
 * Description: Tests for the TacoStandEmitter Class
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand");
const tacoStand = new TacoStandEmitter();

function testServeCustomer() {
  try {
    // register an event listener for the "action" event
    tacoStand.on("serve", (customer) => {
      assert.strictEqual(customer, "Bob");
    });
    // call the perform action method
    tacoStand.serveCustomer("Bob");
    console.log("Passed testServeCustomer");
    return true;
  } catch (err) {
    console.error(`Failed testServeCustomer: ${err}`);
    return false;
  }
}

function testPrepareTaco() {
  try {
    // register an event listener for the "action" event
    tacoStand.on("prepare", (taco) => {
      assert.strictEqual(taco, "Beef");
    });
    // call the perform action method
    tacoStand.prepareTaco("Beef");
    console.log("Passed testPrepareTaco");
    return true;
  } catch (err) {
    console.error(`Failed testPrepareTaco: ${err}`);
    return false;
  }
}

function testHandleRush() {
  try {
    // register an event listener for the "action" event
    tacoStand.on("rush", (rush) => {
      assert.strictEqual(rush, "lunch");
    });
    // call the perform action method
    tacoStand.handleRush("lunch");
    console.log("Passed testHandleRush");
    return true;
  } catch (err) {
    console.error(`Failed testHandleRush: ${err}`);
    return false;
  }
}

testServeCustomer();
testPrepareTaco();
testHandleRush();
