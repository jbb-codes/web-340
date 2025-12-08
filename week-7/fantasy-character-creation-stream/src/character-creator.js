const { Duplex } = require("stream");

// Used textbook examples to implement CharacterCreator class the
// assignment instructions  did not seem to give enough detail as
// to what was wanted

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    this.queue = [];
  }

  _write(chunk, encoding, callback) {
    const trait = chunk.toString().trim();
    if (!trait) {
      callback(new Error("Invalid data"));
      return;
    }

    this.queue.push(`The character trait is ${trait}`);
    callback();
  }

  _read(size) {
    if (this.queue.length) {
      this.push(this.queue.shift() + "\n");
    } else {
      this.push(null);
    }
  }
}

module.exports = CharacterCreator;
