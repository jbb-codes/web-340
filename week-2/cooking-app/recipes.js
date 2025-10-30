/**
 * Author: Jarren Bess
 * Date: Oct 30, 2025
 * File Name: recipes.js
 * Description: Recipe module
 */

// Define the createRecipe function
function createRecipe(ingredients) {
  ingredientList = "Recipe created with ingredients: ";

  ingredients.forEach(function (ingredient, i) {
    ingredientList += `${ingredient}${ingredients[++i] ? ", " : ""}`;
  });

  return ingredientList;
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
