import { UploadedFile } from "express-fileupload";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const subirArchivo = (file, extensionesValidas = ["png", "jpg", "jpeg"]) => {
  return new Promise<void>((resolve, reject) => {
    //OBTENER PARAMETROS DEL REQ.FILES
    const img1 = file as UploadedFile;

    const extensionesValidas = ["png", "jpg", "jpeg", "PNG", "JPG", "JPEG"];

    const nombreConrtado = img1.name.split(".");

    const extension = nombreConrtado[nombreConrtado.length - 1];

    if (!extensionesValidas.includes(extension)) {
      return reject(
        `El formato ${extension} no es permitida. ${extensionesValidas}`
      );
    }

    const nombreTemp = uuidv4() + "." + extension;

    resolve(nombreTemp as any);
  });
};

export default subirArchivo;
