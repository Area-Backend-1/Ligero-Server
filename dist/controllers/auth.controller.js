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
exports.registerUsuarioNatural = exports.login = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const generar_jwt_1 = __importDefault(require("../helpers/generar-jwt"));
const natural_1 = __importDefault(require("../models/natural"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { correo, passwd } = req.body;
    try {
        //Buscar usuario por correo
        const usuario = yield usuario_1.default.findOne({
            where: { correo: correo },
        });
        //Validar existe usuario
        if (!usuario) {
            return res.status(400).json({
                errors: [{ msg: "Usuario o password no son correctos" }],
            });
        }
        //Convertir modelo a objeto
        const oUsuario = usuario.get({ plain: true });
        //Validar estado del usuario
        if (!oUsuario.estado) {
            return res.status(400).json({
                errors: [{ msg: " actualmente inhabilitado" }],
            });
        }
        //Validar Password
        const validPassword = bcryptjs_1.default.compareSync(passwd, oUsuario.passwd);
        if (!validPassword) {
            return res.status(400).json({
                errors: [{ msg: "Usuario o contraseña incorrecta" }],
            });
        }
        //Generar JWT
        console.log("PRINT LOGIN");
        const token = yield (0, generar_jwt_1.default)(oUsuario.id);
        console.log("PRINT LOGIN");
        console.log(token);
        res.json({
            usuario,
            token,
        });
    }
    catch (error) {
        res.status(500).json({
            msg: "Hable con el administrador 0001",
        });
    }
});
exports.login = login;
const registerUsuarioNatural = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { correo, passwd, nomNat, tipDoc, docNat, ciuNat, telNat } = req.body;
    try {
        // //Encriptar password
        const dificultad = bcryptjs_1.default.genSaltSync();
        //REGISTRO USUARIO
        const usuario = yield usuario_1.default.create({
            correo: correo,
            passwd: bcryptjs_1.default.hashSync(passwd, dificultad),
            est_usu: true,
            id_rol: 2,
        });
        const user = usuario.get({ plain: true });
        //REGISTRO CONTADOR
        const natural = yield natural_1.default.create({
            nom_nat: nomNat,
            tip_doc: tipDoc,
            doc_nat: docNat,
            ciu_nat: ciuNat,
            tel_nat: telNat,
            usu_nat: user.id,
        });
        const natu = natural.get({ plain: true });
        //Generar JWT
        console.log("PRINT LOGIN");
        const token = yield (0, generar_jwt_1.default)(user.id);
        console.log("PRINT LOGIN");
        console.log(token);
        // //Borrar password del object
        delete user.password;
        res.json({
            user,
            natu,
            token,
            ok: true,
        });
        console.log("Natural::", req.body);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador 0002",
        });
    }
});
exports.registerUsuarioNatural = registerUsuarioNatural;
//# sourceMappingURL=auth.controller.js.map