const assert = require("assert");
const calculateDistance = require("../src/distance-calculator");

// I was not sure if you wanted 3 similar tests or different tests so I did both
function testEarthToMars() {
  try {
    assert.strictEqual(calculateDistance("Earth", "Mars"), 0.52);
    console.log("testEarthToMars passed");
    return true;
  } catch (error) {
    console.error(`Failed testEarthToMars: ${error.message}`);
  }
}

function testMercuryToNeptune() {
  try {
    assert.strictEqual(calculateDistance("Mercury", "Neptune"), 29.67);
    console.log("testMercuryToNeptune passed");
    return true;
  } catch (error) {
    console.error(`Failed testMercuryToNeptune: ${error.message}`);
  }
}

function testVenusToMars() {
  try {
    assert.strictEqual(calculateDistance("Venus", "Mars"), 0.8);
    console.log("testVenusToMars passed");
    return true;
  } catch (error) {
    console.error(`Failed testVenusToMars: ${error.message}`);
  }
}

function testDistanceCalculationWithLooseEquality() {
  try {
    assert.equal(calculateDistance("Mercury", "Saturn"), "9.15");
    console.log("testDistanceCalculationWithLooseEquality passed");
    return true;
  } catch (error) {
    console.error(
      `Failed testDistanceCalculationWithLooseEquality: ${error.message}`
    );
    return false;
  }
}

function testCalculateDistanceDoesCorrectCalculationWithStrictEquality() {
  try {
    assert.strictEqual(calculateDistance("Earth", "Jupiter"), 4.2);
    console.log(
      "testCalculateDistanceDoesCorrectCalculationWithStrictEquality passed"
    );
    return true;
  } catch (error) {
    console.error(
      `Failed testCalculateDistanceDoesCorrectCalculationWithStrictEquality: ${error.message}`
    );
    return false;
  }
}

// An AI prompt pointed out that if the throws assertion passes nothing happens
// and to add a console log if you want to see that it passed
function testCalculateDistanceOnlyAcceptsValidInput() {
  try {
    assert.throws(
      () => calculateDistance("Mars", "Moon"),
      "The function did not throw an error"
    );
    console.log("testCalculateDistanceOnlyAcceptsValidInput passed");
    return true;
  } catch (error) {
    console.error(
      `Failed testCalculateDistanceOnlyAcceptsValidInput: ${error.message}`
    );
    return false;
  }
}

// Call your test functions here
testEarthToMars();
testMercuryToNeptune();
testVenusToMars();
testDistanceCalculationWithLooseEquality();
testCalculateDistanceDoesCorrectCalculationWithStrictEquality();
testCalculateDistanceOnlyAcceptsValidInput();
