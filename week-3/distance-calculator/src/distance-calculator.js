const planets = {
  Mercury: 0.39,
  Venus: 0.72,
  Earth: 1,
  Mars: 1.52,
  Jupiter: 5.2,
  Saturn: 9.54,
  Uranus: 19.2,
  Neptune: 30.06,
};

// I used AI to figure out how to convert the value back to a Number since
// the toFixed method converts it to a string; the Number function was suggested.
// I got the idea to test object properties and throw an error for input validation
// from a classmate

// Calculate the distance between two planets using AU(Astronomical Units).
function calculateDistance(planet1, planet2) {
  if (!Object.hasOwn(planets, planet1) || !Object.hasOwn(planets, planet2)) {
    throw new Error("Both inputs must be valid planets");
  }
  return Number(Math.abs(planets[planet1] - planets[planet2]).toFixed(2));
}

module.exports = calculateDistance;
