const repositorio = require("../repositorios/encomendas");

class Encomendas{
    async adicionar(encomenda){
        return await repositorio.adicionar(encomenda);
    }
}