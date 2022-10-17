"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('ligero', 'root', 'jamp1987+', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
});
// const db = new Sequelize('ligeroproduccion', 'root', 'jamp1987+', {
//     host: 'localhost',
//     dialect: 'mysql',
//     // logging: false
// });
exports.default = db;
//# sourceMappingURL=connection.js.map