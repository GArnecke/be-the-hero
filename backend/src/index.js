const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors(
   // { origin: 'http://meuapp.com' }
));
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 * Ex.: app.get('/users',
 *  Rota:    'http://localhost:3333'
 *  Recurso: '/users' 
 */ 

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma infomração no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de Parâmetros
  * 
  * Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para utilizar ou alterar recursos
  * 
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSql: MongoDB, CouchDB
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */

 app.listen(3333);