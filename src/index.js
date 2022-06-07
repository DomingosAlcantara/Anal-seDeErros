const customExpress = require("./config/customExpress");
const pool = require("./infraestrutura/conexao");
const uploadDeArquivos = require("./importacoes/uploadDeArquivos");

const port = 3001;

// pool.getConnection((err, connection) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Conectado com Sucesso.");
//     connection.release();

//     const app = customExpress();

//     //Home
//     app.get("/", (req, res) => {
//       res.send("Sistema da Sema!");
//     });

//     app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
//   }

// });

uploadDeArquivos.test();
