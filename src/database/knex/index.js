const config = require('../../../knexfile');
const knex = require('knex')

const connection = knex(config.development)

module.exports = connection;

//npm install knex --save
//npx knex init