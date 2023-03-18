const fsP = require("fs").promises;
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

  listFiles(folderPath) {
    return fs.readdirSync(folderPath).map((file) => {
      return `${folderPath}/${file}`;
    });
  }

  readDirectory(folderPath) {
    return new Promise((resolve, reject) => {
      try {
        resolve(this.listFiles(folderPath));
      } catch (err) {
        reject(err);
      }
    });
  }
}

module.exports = uploadDeArquivos;
