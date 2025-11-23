/**
 * Author: Jarren Bess
 * Date: Nov 22, 2025
 * File Name: pie.js
 * Description: Module for baking pies
 */
"use strict";

function bakePie(pieType, ingredients) {
  essentialIngredients = ["flour", "sugar", "butter"];

  // Used AI to find method combo for checking if array has all items in another array
  let hasEssential = essentialIngredients.every((essential) =>
    ingredients.includes(essential)
  );

  if (hasEssential) {
    console.log(`${pieType} pie baked successfully`);
  } else {
    console.warn(`${pieType} pie not baked successfully`);
    process.exit(1);
  }
}

module.exports = { bakePie };
