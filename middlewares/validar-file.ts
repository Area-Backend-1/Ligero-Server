import express from "express";

const validarFile = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // console.log(req.body);
  // console.log(req["files"]);
  try {
    //VALIDAR CAMPOS REQ.FILES
    if (!req["files"] || Object.keys(req["files"]).length === 0) {
      return res.status(400).json({ msg: "No hay archivos que subir" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: error,
    });
  }
};

export default validarFile;
