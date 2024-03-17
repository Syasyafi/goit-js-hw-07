class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // Output: "."
builder.padStart('^');
console.log(builder.getValue()); // Output: "^."
builder.padEnd('^');
console.log(builder.getValue()); // Output: "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // Output: "=^.^="
