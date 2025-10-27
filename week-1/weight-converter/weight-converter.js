/**
 * Author: Jarren Bess
 * Date: Oct 24, 2025
 * File Name: weight-converter.js
 * Description: Node.js script that converts pounds to kilograms
 */

"use strict";

function lbsToKgs() {
  const lbs = process.argv[2];
  if (process.argv.length != 3) {
    console.error("Usage: node weight-converter.js <pounds>");
    process.exit(1);
  } else if (isNaN(lbs)) {
    console.error("Input must be a number");
    process.exit(1);
  }

  // Convert pounds to kilograms
  let lbsToKgs = lbs * 0.453592;
  console.log(`${lbsToKgs.toFixed(2)}`);
}

lbsToKgs();
