import { Model } from 'objection'
import db from '../db'

Model.knex(db)

// Define an interface for the User properties
interface IUser {
  id: number
  name: string
  email: string
  password: string
}

// Extend the interface for jsonSchema
interface UserJsonSchema {
  type: string
  properties: {
    name: { type: string, minLength: number, maxLength: number }
    email: { type: string, minLength: number, maxLength: number }
    password: { type: string, minLength: number, maxLength: number }
  }
}

export default class User extends Model implements IUser {
  static get tableName (): string {
    return 'users'
  }

  id!: number
  name!: string
  email!: string
  password!: string

  static get jsonSchema (): UserJsonSchema {
    return {
      type: 'object',
      properties: {
        name: { type: 'string', minLength: 1, maxLength: 20 },
        email: { type: 'string', minLength: 1, maxLength: 20 },
        password: { type: 'string', minLength: 1, maxLength: 20 }
      }
    }
  }
}
