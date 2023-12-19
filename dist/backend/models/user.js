"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const db_1 = __importDefault(require("../db"));
objection_1.Model.knex(db_1.default);
class User extends objection_1.Model {
    static get tableName() {
        return 'users';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                name: { type: 'string', minLength: 1, maxLength: 20 },
                email: { type: 'string', minLength: 1, maxLength: 20 },
                password: { type: 'string', minLength: 1, maxLength: 20 },
            }
        };
    }
}
exports.default = User;
