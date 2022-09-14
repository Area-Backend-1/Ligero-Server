import * as express from "express";

// Configurar cabeceras y cors
const validarCors = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  // res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  // res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  // res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
};

export default validarCors;
