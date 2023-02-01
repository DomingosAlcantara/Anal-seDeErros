const Encomenda = class {
    #codigo = "";
    #status = "";
    #dt_hr_leitura = "";
    #dt_hr_basculacao = "";
    #idInducao = "";

    constructor(definicoes){
        this.#codigo = definicoes.codigo;
        this.#idInducao = definicoes.idInducao;
        this.#dt_hr_leitura = definicoes.dt_hr_leitura;
        this.#dt_hr_basculacao = definicoes.dt_hr_basculacao;
        this.#status = definicoes.status;
    }

    
}