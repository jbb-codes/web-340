/**
 * Author: Jarren Bess
 * Date: Ded 14, 2025
 * File Name: character-creation.spec.js
 */

"use strict";

const fs = require("fs").promises;

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  beforeEach(() => {
    jest.resetModules();
    jest
      .spyOn(fs, "readFile")
      .mockImplementation(() =>
        Promise.resolve("Class: Warrior\nGender: Male\nFun fact: Has red hair")
      );
    jest.spyOn(fs, "writeFile").mockImplementation(() => Promise.resolve())(
      ({
        createCharacter,
        getCharacters,
      } = require("../src/character-creation.js"))
    );
  });

  test("writes new character to a file", async () => {
    await expect(
      createCharacter([
        "Class: Warrior",
        "Gender: Male",
        "Fun fact: has red hair",
      ])
    ).resolves.toBeUndefined();
  });

  test("reads characters from a file", async () => {
    const characters = await getCharacters();
    expect(characters).toEqual([
      "Class: Warrior",
      "Gender: Male",
      "Fun fact: Has red hair",
    ]);
  });

  test("handles errors when writing a character to the file", async () => {
    fs.writeFile.mockImplementationOnce(() =>
      Promise.reject(new Error("No data"))
    );

    await expect(createCharacter([])).rejects.toThrow("No data");
  });
});
