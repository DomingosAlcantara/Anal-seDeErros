const supertest = require("supertest");
const customExpress = require("../src/config/customExpress");

const request = supertest(customExpress());

describe("Testando a busca dos Arquivos", () => {
  test("Listando os arquivos presentes na pasta informada", async () => {});
});
