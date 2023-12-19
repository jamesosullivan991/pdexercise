"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
const migrationsDirPath = path.join(__dirname, './migrations');
const config = {
    development: {
        client: 'pg',
        asyncStackTraces: true,
        connection: {
            host: '127.0.0.1',
            user: 'postgres',
            password: 'secret',
            database: 'postgres',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: migrationsDirPath,
        },
    },
    production: {},
    test: {
        client: 'pg',
        asyncStackTraces: true,
        connection: process.env.DATABASE_URL || {
            host: '127.0.0.1',
            user: 'postgres',
            password: 'secret',
            database: 'postgres',
        },
        pool: {
            min: 2,
            max: 10,
        },
        acquireConnectionTimeout: 10000,
        migrations: {
            directory: migrationsDirPath,
        },
    },
};
exports.default = config;
