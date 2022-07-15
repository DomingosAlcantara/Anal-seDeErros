const query = require("../infraestrutura/database/queries");

class Encomendas {
    adicionar(encomenda){
        const sql = "INSERT INTO tb_dados_encomendas SET ?";

        return query(sql, encomenda);
    }

    listarPorPeriodo(dataInicial, dataFinal){
        const sql = `SELECT DISTINCT status_final, COUNT(status_final) 
            FROM tb_dados_encomendas 
            WHERE dataLeitura >= ? AND dataLeitura <= ?`
        ;


        return query(sql, dataInicial, dataFinal);
    }
}