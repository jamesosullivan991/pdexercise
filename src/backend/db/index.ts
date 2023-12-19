import knex from 'knex'
import config from './knexfile'

type Environment = 'development' | 'production' | 'test'

const environment: Environment = process.env.NODE_ENV || 'development'

export default knex(config[environment])
