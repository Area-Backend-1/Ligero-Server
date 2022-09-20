"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const ciudad_1 = __importDefault(require("./ciudad"));
const usuario_1 = __importDefault(require("./usuario"));
const Empresa = connection_1.default.define("empresas", {
    emp_usu: {
        type: sequelize_1.DataTypes.STRING,
    },
    nit_emp: {
        type: sequelize_1.DataTypes.STRING,
    },
    nom_con: {
        type: sequelize_1.DataTypes.STRING,
    },
    dir_emp: {
        type: sequelize_1.DataTypes.STRING,
    },
    tel_emp: {
        type: sequelize_1.DataTypes.STRING,
    },
});
Empresa.belongsTo(ciudad_1.default, {
    foreignKey: {
        name: "ciu_emp",
    },
});
Empresa.belongsTo(usuario_1.default, {
    foreignKey: {
        name: "usu_emp",
    },
});
exports.default = Empresa;
//# sourceMappingURL=empresa.js.map