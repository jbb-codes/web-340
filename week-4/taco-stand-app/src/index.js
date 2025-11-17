/**
 * Author: Jarren Bess
 * Date: Nov 16, 2025
 * File Name: index.js
 * Description: CLI program to use TacoStandEmitter Class
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./taco-stand");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// After extensive trial and error with the help of Copilot I found out
// the reason for the duplicate CLI messages was because the tacoStand
// event listeners were inside the readline listener thus duplicating
// the tacoStand listeners with each command input in the CLI
tacoStand.on("serve", (customer) => {
  console.log(`Taco Stand serves: ${customer}`);
});

tacoStand.on("prepare", (taco) => {
  console.log(`Taco Stand prepares: ${taco}`);
});

tacoStand.on("rush", (rush) => {
  console.log(`Taco Stand handles rush: ${rush}`);
});

rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");

  command === "serve"
    ? tacoStand.serveCustomer(args)
    : command === "prepare"
    ? tacoStand.prepareTaco(args)
    : command === "rush"
    ? tacoStand.handleRush(args)
    : console.log("Invalid command");
});

console.log(
  `Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`
);
