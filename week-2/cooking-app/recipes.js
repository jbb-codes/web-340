/**
 * Author: Jarren Bess
 * Date: Oct 30, 2025
 * File Name: recipes.js
 * Description: Recipe module
 */

// Define the createRecipe function
function createRecipe(ingredients) {
  // Wanted to simplify what I had; I was studying the spread operator and
  // using join was suggested by an AI prompt as a common way to join array items
  // much cleaner and a good reminder to search through the built in methods
  return `Recipe created with ingredients: ${ingredients.join(", ")}`;
}

// Define the setTimer function
function setTimer(minutes) {
  return `Timer set for ${minutes} minutes`;
}

// Define the quit function
function quit() {
  return `Program exited`;
}

module.exports = { createRecipe, setTimer, quit };
