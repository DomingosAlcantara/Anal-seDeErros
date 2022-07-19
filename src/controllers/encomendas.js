const Encomendas = require("..models/Encomendas");

module.exports = (app) => {
    app.post("/importar", (req, res, next) => {
        const encomenda = req.body;

        Encomendas.adicionar(encomenda)
            .then((encomendaAdicionada) => res.status(201).json(encomendaAdicionada))
            .catch((erros) => next(erros));
    })
}