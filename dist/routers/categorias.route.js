"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoria_controller_1 = require("../controllers/categoria.controller");
const router = (0, express_1.Router)();
router.get("/listaCategoria", categoria_controller_1.getCategoria);
exports.default = router;
//# sourceMappingURL=categorias.route.js.map