"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const subirArchivo = (file, extensionesValidas = ["png", "jpg", "jpeg"]) => {
    return new Promise((resolve, reject) => {
        //OBTENER PARAMETROS DEL REQ.FILES
        const img1 = file;
        const extensionesValidas = ["png", "jpg", "jpeg", "PNG", "JPG", "JPEG"];
        const nombreConrtado = img1.name.split(".");
        const extension = nombreConrtado[nombreConrtado.length - 1];
        if (!extensionesValidas.includes(extension)) {
            return reject(`El formato ${extension} no es permitida. ${extensionesValidas}`);
        }
        const nombreTemp = (0, uuid_1.v4)() + "." + extension;
        resolve(nombreTemp);
    });
};
exports.default = subirArchivo;
//# sourceMappingURL=subir-archivo.js.map