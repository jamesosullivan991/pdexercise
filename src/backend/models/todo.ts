import { Model } from 'objection'
import db from '../db'

Model.knex(db)

// Define an interface for the User properties
interface ITodo {
  id: number
  description: string
}

// Extend the interface for jsonSchema
interface UserJsonSchema {
  type: string
  properties: {
    description: { type: string, minLength: number, maxLength: number }
  }
}

export default class Todo extends Model implements ITodo {
  static get tableName (): string {
    return 'todos'
  }

  id!: number
  description!: string

  static get jsonSchema (): UserJsonSchema {
    return {
      type: 'object',
      properties: {
        description: { type: 'string', minLength: 1, maxLength: 400 },
      }
    }
  }
}
