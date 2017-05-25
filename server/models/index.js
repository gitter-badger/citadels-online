import knex from 'knex'
import config from '../config/index'

const db = knex({
  client: 'pg',
  connection: {
    host:       'postgres://localhost:5432/',
    user:       'art',
    password:   '',
    database:   'citadels'
  }
})

export default db
