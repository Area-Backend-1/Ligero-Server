import { Router } from "express";
import validarJWT from "../middlewares/validar-jwt";
import validarCampos from "../middlewares/validar-campos";
import { getUsuario } from "../controllers/usuario.controller";


const router = Router();

router.get("/listaNatural", [validarJWT], getUsuario);

export default router;