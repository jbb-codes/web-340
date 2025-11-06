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
function calculateDistance(planet1, planet2) {
  return Number(Math.abs(planets[planet1] - planets[planet2]).toFixed(2));
}

module.exports = calculateDistance;
