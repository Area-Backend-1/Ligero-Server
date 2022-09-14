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
exports.getCategoria = void 0;
const categoria_1 = __importDefault(require("../models/categoria"));
const getCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario, uid } = req.params;
    try {
        const cat = yield categoria_1.default.findAll({
            // where: { id_orden: 303 },
            attributes: ["id", "nom_cat"],
        });
        res.json({
            ruta: cat,
        });
    }
    catch (error) {
        console.log("Error", error);
        res.status(500).json({
            msg: "Hable con el administrador 0001",
        });
    }
});
exports.getCategoria = getCategoria;
//# sourceMappingURL=categoria.controller.js.map