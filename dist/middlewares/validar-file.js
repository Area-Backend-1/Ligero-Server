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
Object.defineProperty(exports, "__esModule", { value: true });
const validarFile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.body);
    // console.log(req["files"]);
    try {
        //VALIDAR CAMPOS REQ.FILES
        if (!req["files"] || Object.keys(req["files"]).length === 0) {
            return res.status(400).json({ msg: "No hay archivos que subir" });
        }
        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({
            msg: error,
        });
    }
});
exports.default = validarFile;
//# sourceMappingURL=validar-file.js.map