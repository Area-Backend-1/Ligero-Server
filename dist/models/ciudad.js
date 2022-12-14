"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Ciudad = connection_1.default.define("ciudades", {
    nom_ciu: {
        type: sequelize_1.DataTypes.STRING,
    },
    est_ciu: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
});
exports.default = Ciudad;
//# sourceMappingURL=ciudad.js.map