import { knex as setupKnex, Knex } from 'knex'

export const configDatase: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: './tmp/app.db',
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './src/database/migrations',
  },
}
export const knex = setupKnex(configDatase)
