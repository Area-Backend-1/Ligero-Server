"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const auth_controller_1 = require("../controllers/auth.controller");
const db_validators_1 = require("../helpers/db-validators");
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const validar_jwt_1 = __importDefault(require("../middlewares/validar-jwt"));
const router = (0, express_1.Router)();
router.post("/login", [
    (0, express_validator_1.check)("correo", "El correo es obligatorio").isEmail(),
    (0, express_validator_1.check)("passwd", "El passwd es obligatorio").not().isEmpty(),
    validar_campos_1.default,
], auth_controller_1.login);
router.post("/registerNatural", [
    (0, express_validator_1.check)("nomNat", "El nomNat es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("tipDoc", "El tipDoc documento es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("docNat", "El docNat es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("correo", "El correo es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("correo", "El correo no es valido").isEmail(),
    (0, express_validator_1.check)("correo").custom(db_validators_1.emailExiste),
    (0, express_validator_1.check)("telNat", "El telNat es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("ciuNat", "La ciuNat es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("passwd", "El passwd debe tener mas de 4 caracteres").isLength({
        min: 3,
    }),
    validar_campos_1.default,
], auth_controller_1.registerUsuarioNatural);
router.get("/renew", [validar_jwt_1.default], auth_controller_1.renewToken);
exports.default = router;
//# sourceMappingURL=auth.route.js.map