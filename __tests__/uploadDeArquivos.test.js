const FolderBase = require("../src/Importacoes/uploadDeArquivos");

describe("Testes de Importação dos Arquivos", () => {
  test("Testando o Array com os arquivos", async () => {
    const response = new FolderBase(
      "E:/Domingos/Documents/projetos-web/Domingos/RDATA/FEVEREIRO_22/Corrigidos/"
    );
    const isVector = Array.isArray(
      await response.readDirectory(response.folder)
    );
    expect(isVector).toBe(true);
  });

  
});


/**
 * Tarefas a executar
 * 
 * Importar os dados dos arquivos
 * Gravar os dados no banco dos dados
 * Recuperar os dados
 */