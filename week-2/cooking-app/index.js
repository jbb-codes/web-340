/**
 * Author: Jarren Bess
 * Date: Oct 30, 2025
 * File Name: index.js
 * Description: Demonstrate functionality of recipe module
 */

const recipes = require("./recipes.js");

console.log(
  recipes.createRecipe([
    "1 egg",
    "1 tsp salt",
    "1 cup flour",
    "1/2 cup milk",
    "1 cup sugar",
  ]),
  recipes.setTimer(15),
  recipes.quit()
);
