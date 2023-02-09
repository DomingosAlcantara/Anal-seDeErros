const fsP = require("fs").promisse;
const fs = require("fs");
const readLine = require("readline");

const pastaBase = () => { return "E:/Domingos/Documents/projetos-web/Domingos/RDATA/FEVREIRO_22/";}
const listaDeArquivos = (pasta) => {}
const uploadDeArquivos = class {
    #pasta = "";

    constructor(pasta){
        this.pasta(pasta);
    }

    set pasta(pasta){
        try{
            this.#pasta = pasta;
        } catch(err){
            throw new Error("A pasta informada não é valida");
        }
    }

    get pasta(){
        return this.#pasta;
    }

    async init()
}