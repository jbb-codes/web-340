/**
 * Author: Jarren Bess
 * Date: Ded 14, 2025
 * File Name: character-creation.js
 */

"use strict";

const fs = require("fs").promises;
const { join } = require("path");
const CHARACTER_FILE = join(__dirname, "character.txt");

async function createCharacter(character) {
  try {
    const data = character.join("\n");
    await fs.writeFile(CHARACTER_FILE, data);
  } catch (error) {
    throw error;
  }
}

async function getCharacters() {
  try {
    const data = await fs.readFile(CHARACTER_FILE, "utf8");
    const characters = data.split("\n").filter((character) => character);
    return characters;
  } catch (error) {
    throw error;
  }
}

module.exports = { createCharacter, getCharacters };
