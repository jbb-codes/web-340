const CharacterCreator = require("../src/character-creator");

describe("CharacterCreator", () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  // Used textbook examples to implement tests the assignment instructions
  // did not seem to give enough detail as to what was wanted
  test("should process data correctly when written to", (done) => {
    const characterTraits = ["Warrior", "Male", "Has red hair"];

    characterTraits.forEach((trait) => {
      characterCreator.write(trait);
    });

    characterCreator.on("data", (data) => {
      const trait = characterTraits.shift();
      expect(data.toString().trim()).toBe(`The character trait is ${trait}`);
      if (characterTraits.length === 0) {
        done();
      }
    });
  });

  test("should emit 'error' when invalid data is written", (done) => {
    characterCreator.write("");

    characterCreator.on("error", (err) => {
      expect(err.message).toBe("Invalid data");
      done();
    });
  });

  test("should transform data correctly when written to", (done) => {
    const character = "Bob";
    const expectedOutput = `The character trait is ${character}`;

    characterCreator.write(character, "utf8", () => {
      characterCreator.on("data", (data) => {
        expect(data.toString().trim()).toBe(expectedOutput);
        done();
      });
    });
  });
});
