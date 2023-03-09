"use strict";

class Registro {
  #codigo = "";
  #status = "";
  #dt_hr_leitura = "";
  #dt_hr_basculacao = "";
  #idInducao = "";
  #saidaEsperada = "";
  #saidaEfetiva = "";

  constructor(dados) {
    this.codigo = dados.codigo;
    this.status = dados.status;
    this.dataHoraLeitura = dados.dt_hr_leitura;
    this.dataHoraBasculacao = dados.dt_hr_basculacao;
    this.idInducao = dados.idInducao;
    this.saidaEsperada = dados.saidaEsperada;
    this.saidaEfetiva = dados.saidaEfetiva;
  }

  set codigo(codigo) {
    if (codigo.length === 13) {
      this.#codigo = codigo;
    } else {
      throw new Error("O código da Encomenda possui 13 caracteres");
    }
  }

  get codigo() {
    return this.#codigo;
  }

  set status(status) {
    this.#status = status;
  }

  get status() {
    return this.#status;
  }

  set #dataHoraLeitura(dt_hr_leitura) {
    this.#dt_hr_leitura = dt_hr_leitura;
  }

  get dataHoraLeitura() {
    return this.#dt_hr_leitura;
  }

  set #dataHoraBasculacao(dt_hr_basculacao) {
    this.#dt_hr_basculacao = dt_hr_basculacao;
  }

  get dataHoraBasculacao() {
    return this.#dt_hr_basculacao;
  }

  set idInducao(idInducao) {
    this.#idInducao = idInducao;
  }

  get idInducao() {
    return this.#idInducao;
  }

  set saidaEsperada(saida) {
    this.#saidaEsperada = saida;
  }

  get saidaEsperada() {
    return this.#saidaEsperada;
  }

  set saidaEfetiva(saida) {
    this.#saidaEfetiva = saida;
  }

  get saidaEfetiva() {
    return this.#saidaEfetiva;
  }
}

module.exports = Registro();
