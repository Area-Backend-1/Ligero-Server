import { Router } from "express";
import { check } from "express-validator";
import { login, registerUsuarioNatural, renewToken } from "../controllers/auth.controller";
import { emailExiste } from "../helpers/db-validators";
import validarCampos from "../middlewares/validar-campos";
import validarFile from "../middlewares/validar-file";
import validarJWT from "../middlewares/validar-jwt";

const router = Router();

router.post(
  "/login",
  [
    check("correo", "El correo es obligatorio").isEmail(),
    check("passwd", "El passwd es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  login
);

router.post(
  "/registerNatural",
  [
    check("nomNat", "El nomNat es obligatorio").not().isEmpty(),
    check("tipDoc", "El tipDoc documento es obligatorio").not().isEmpty(),
    check("docNat", "El docNat es obligatorio").not().isEmpty(),
    check("correo", "El correo es obligatorio").not().isEmpty(),
    check("correo", "El correo no es valido").isEmail(),
    check("correo").custom(emailExiste),
    check("telNat", "El telNat es obligatorio").not().isEmpty(),
    check("ciuNat", "La ciuNat es obligatorio").not().isEmpty(),
    check("passwd", "El passwd debe tener mas de 4 caracteres").isLength({
      min: 3,
    }),
    validarCampos,
  ],
  registerUsuarioNatural
);
router.get("/renew", [validarJWT], renewToken);

export default router;
