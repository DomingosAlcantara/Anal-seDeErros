const supertest = require("supertest");
const customExpress = require("../src/config/customExpress");

const request = supertest(customExpress());

describe("Testes de Importação dos Arquivos", () => {
  test("Listar arquivos", async () => {});
});
