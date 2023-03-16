const FolderBase = require("../src/Importacoes/uploadDeArquivos");

describe("Testes de Importação dos Arquivos", () => {
  test("Listando os diretórios", () => {
    const testBase = new FolderBase("/dados/");
    expect(Array.isArray(testBase.listarDiretorios())).toBe(true);
  });
});
