const fsP = require("fs").promises;
const fs = require("fs");
const readLine = require("readline");
// const path = require("path");

// module.exports = (caminho, nomeDoArquivo, callbackArquivoCarregado) => {
//     const tipoValido = "txt";
//     const tipo = path.extname(caminho);
//     const tipoEhValido = tipoValido.indexOf(tipo) !== -1;

//     if(!tipoEhValido){
//         const erro = "Tipo Inválido";
//         console.log(`Erro: ${erro}`);
//         callbackArquivoCarregado(erro);
//     } else {
//         const pastaBase = "E:/Domingos/Documents/projetos-web/Domingos/RDATA/";
//         const pastaDestino = "E:/Domingos/Documents/projetos-web/Domingos/RDATA/";

//         const arquivos = "";
//     }
// }

const uploadDeArquivos = class {
  pastaBase = "E:/Domingos/Documents/projetos-web/Domingos/RDATA/FEVREIRO_22/";
  // const pastaDestino = "E:/Domingos/Documents/projetos-web/Domingos/RDATA/Março/Carregados/";

  async listarArquivosDoDiretorio(diretorio, arquivos) {
    if (!arquivos) arquivos = [];

    const listaDeArquivos = await fsP.readdir(diretorio);

    for (let k in listaDeArquivos) {
      let stat = fsP.stat(`${diretorio}${listaDeArquivos[k]}`);
      if ((await stat).isDirectory()) {
        await this.listarArquivosDoDiretorio(
          `${diretorio}${listaDeArquivos[k]}`,
          arquivos
        );
      } else {
        arquivos.push(`${diretorio}${listaDeArquivos[k]}`);
      }
    }

    return arquivos;
  }

  async lerArquivo(arquivo) {
    const fileStream = fs.createReadStream(arquivo);

    const rl = readLine.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    for await (const line of rl) {
      // console.log(line);
      const registro = line.split("|");
      console.log(`Há um total de: ${registro.length} campos`);

      const meuObjeto = {
        campo1: registro[0],
        tipo_Objeto: registro[1],
        codigo_objeto: registro[2],
        campo2: registro[3],
        tunel_leitura: registro[4],
        campo3: registro[5],
        campo4: registro[6],
        peso_em_grama: registro[7],
        campo5: registro[8],
        campo6: registro[9],
        campo7: registro[10],
        campo8: registro[11],
        cod_operador: registro[12],
        campo9: registro[13],
        saida_esperada: registro[14],
        saida_efetiva: registro[15],
        status_final: registro[16],
        campo10: registro[17],
        tipo_leitura: registro[18],
        campo11: registro[19],
        campo12: registro[20],
        campo13: registro[21],
        campo14: registro[22],
        campo15: registro[23],
        data_hora_leitura: registro[24],
        campo16: registro[25],
        carreta: registro[26],
        campo17: registro[27],
        campo18: registro[28],
        campo19: registro[29],
      };

      console.log(meuObjeto);
    }
  }

  async test() {
    let arquivos = await this.listarArquivosDoDiretorio(this.pastaBase);
    console.log(arquivos);
    this.lerArquivo(arquivos[0]);
    return arquivos;
  }
};

module.exports = new uploadDeArquivos();
