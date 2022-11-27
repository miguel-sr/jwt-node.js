const mongoose = require('mongoose');

// ==> Importar o arquivo: 'db.config.js'
const database = require('../config/db.config'); // ==> conexão local da base de dados

mongoose.Promise = global.Promise;

// ==> Conexão da base de dados
mongoose.connect(database.local.localDatabaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('A base de dados foi conectada com sucesso!');
}).catch((err) => {
  console.log(`Erro ao conectar com a base de dados ... : ${err} `);
  process.exit();
});