"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsuario = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario, uid } = req.params;
    try {
        const usu = yield usuario_1.default.findAll({
            // where: { id_orden: 303 },
            attributes: ["id", "correo"],
        });
        res.json({
            ruta: usu,
        });
    }
    catch (error) {
        console.log("Error", error);
        res.status(500).json({
            msg: "Hable con el administrador 0001",
        });
    }
});
exports.getUsuario = getUsuario;
//# sourceMappingURL=usuario.controller.js.map