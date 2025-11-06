const assert = require("assert");
const calculateDistance = require("../src/distance-calculator");

function testEarthToJupiter() {
  try {
    assert.strictEqual(calculateDistance("Earth", "Jupiter"), 4.2);
    console.log("testEarthToJupiter passed");
    return true;
  } catch (error) {
    console.error(`Failed testEarthToJupiter: ${error.message}`);
    return false;
  }
}

function testMarsToSaturn() {
  try {
    assert.strictEqual(calculateDistance("Mars", "Saturn"), 8.02);
    console.log("testMarsToSaturn passed");
    return true;
  } catch (error) {
    console.error(`Failed testMarsToSaturn: ${error.message}`);
    return false;
  }
}

function testMercuryToNeptune() {
  try {
    assert.strictEqual(calculateDistance("Mercury", "Neptune"), 29.67);
    console.log("testMercuryToNeptune passed");
    return true;
  } catch (error) {
    console.error(`Failed testMercuryToNeptune: ${error.message}`);
    return false;
  }
}

// Call your test functions here
testEarthToJupiter();
testMarsToSaturn();
testMercuryToNeptune();
