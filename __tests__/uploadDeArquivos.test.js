const FolderBase = require("../src/Importacoes/uploadDeArquivos");

describe("Testes de Importação dos Arquivos", () => {
  test("Listando os diretórios", async () => {
    const response = new FolderBase("/dados/");
    const isVector = Array.isArray(await response.listarDiretorios());
    expect(isVector).toBe(true);
  });
});
