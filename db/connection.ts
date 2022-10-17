import {Sequelize} from 'sequelize';

const db = new Sequelize('ligero', 'root', 'jamp1987+', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
});

// const db = new Sequelize('ligeroproduccion', 'root', 'jamp1987+', {
//     host: 'localhost',
//     dialect: 'mysql',
//     // logging: false
// });

export default db;

