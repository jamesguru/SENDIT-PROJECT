"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlconfig = void 0;
exports.sqlconfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: 'localhost',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
    },
    options: {
        encrypt: true,
        trustServerCertificate: true,
    }
};
