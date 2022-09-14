"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const ciudad_1 = __importDefault(require("./ciudad"));
const usuario_1 = __importDefault(require("./usuario"));
const Natural = connection_1.default.define("naturales", {
    nom_nat: {
        type: sequelize_1.DataTypes.STRING,
    },
    tip_doc: {
        type: sequelize_1.DataTypes.STRING,
    },
    doc_nat: {
        type: sequelize_1.DataTypes.STRING,
    },
    tel_nat: {
        type: sequelize_1.DataTypes.STRING,
    },
});
Natural.belongsTo(ciudad_1.default, {
    foreignKey: {
        name: "ciu_nat",
    },
});
Natural.belongsTo(usuario_1.default, {
    foreignKey: {
        name: "usu_nat",
    },
});
exports.default = Natural;
//# sourceMappingURL=natural.js.map