const mysql = require("mysql");

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Luci@24Keven20",
    database: "analiseerros",
});

module.exports = conexao;