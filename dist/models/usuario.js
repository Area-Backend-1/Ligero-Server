"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const rol_1 = __importDefault(require("./rol"));
const Usuario = connection_1.default.define("usuarios", {
    correo: {
        type: sequelize_1.DataTypes.STRING,
    },
    passwd: {
        type: sequelize_1.DataTypes.STRING,
    },
    est_usu: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    // etiqueta:{
    //     type: DataTypes.STRING
    // },
});
Usuario.belongsTo(rol_1.default, {
    foreignKey: {
        name: "id_rol",
    },
});
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map