const sqlite3 = require("sqlite3"); // driver de conexão, que estabelece, de fato, a conexão
const sqlite = require("sqlite"); //responsável por conectar
const path = require("path"); //responsável por adequar os endereços de acordo com o ambiente

async function sqliteConnection() {
  const database = await sqlite.open({
    filename: path.resolve(__dirname, "..", "database.db"),
    driver: sqlite3.Database
  });

  return database;
}

module.exports = sqliteConnection;

//SGBD = Sistema gerenciador de banco de dados