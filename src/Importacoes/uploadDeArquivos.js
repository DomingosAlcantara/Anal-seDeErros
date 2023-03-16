const fsP = require("fs").promisse;
const fs = require("fs");
const readLine = require("readline");

class uploadDeArquivos {
  #folder = "";

  constructor(folder) {
    this.#folder = folder;
  }

  get folder() {
    return this.#folder;
  }
}

module.exports = uploadDeArquivos;
