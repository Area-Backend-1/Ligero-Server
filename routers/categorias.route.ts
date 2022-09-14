import { Router } from "express";
import validarJWT from "../middlewares/validar-jwt";
import validarCampos from "../middlewares/validar-campos";
import { getCategoria } from "../controllers/categoria.controller";

const router = Router();

router.get("/listaCategoria", getCategoria);

export default router;
