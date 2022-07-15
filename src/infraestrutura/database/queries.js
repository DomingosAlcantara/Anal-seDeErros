const conexao = require("./conexao");

const executeQuery = (query, parametros = "")=>{
    return new Promisse((resolve, reject) => {
        conexao.query(query, parametros, (erros, resultados) => {
            if(erros){
                reject(erros);
            }else{
                resolve(resultados);
            }
        });
    });
};