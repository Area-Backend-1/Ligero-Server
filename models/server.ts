import express, { Application } from "express";
import * as https from "https";
import * as fs from "fs";
import path from "path";

import authRoute from "../routers/auth.route";
import categoriaRoutes from "../routers/categorias.route";
import natualRoutes from "../routers/categorias.route";

import fileUpload from "express-fileupload";

import cors from "cors";
import db from "../db/connection";
// import { crontabConstructor } from '../helpers/crontab';

class Server {
  private app: Application;
  private port: string;
  private sslServer: https.Server;
  private apiPaths = {
    categorias: "/api/categorias",
    auth: "/api/auth",    
    //dashboard route
    // users: "/api/dashboard/users",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";
    this.dbConnection();
    this.middlewares();
    // crontabConstructor();

    //INSTALAR CERTIFICADO SSL
    // this.sslServer = https.createServer({
    //   key: fs.readFileSync(path.join(__dirname, 'certified', 'key.pem')).toString(),
    //   cert: fs.readFileSync(path.join(__dirname, 'certified', 'cert.pem')).toString(),
    //   ca: [
    //     fs.readFileSync(path.join(__dirname, 'certified', 'g1_bundle.crt')),
    //     fs.readFileSync(path.join(__dirname, 'certified', 'g2_bundle.crt')),
    //     fs.readFileSync(path.join(__dirname, 'certified', 'g3_bundle.crt')),
    //   ]
    // }, this.app);

    //Definir mis rutas
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("Db online");
    } catch (error) {
      throw new Error();
    }
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    //Lectura Body
    this.app.use(express.json());

    //Carpeta Publica
    this.app.use(express.static("public"));

    //Carga de archivos
    this.app.use(
      fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
        createParentPath: true,
      })
    );
  }

  routes() {
    this.app.use(this.apiPaths.auth, authRoute);
    this.app.use(this.apiPaths.categorias, categoriaRoutes);
    // this.app.use(this.apiPaths.mapas, mapaRoutes);
    // this.app.use(this.apiPaths.orden, ordenRoutes);
    // this.app.use(this.apiPaths.servicio, servicioRoutes);
    // this.app.use(this.apiPaths.contactos, contactoRoutes);
    // this.app.use(this.apiPaths.natural, naturalRoutes);
    // this.app.use(this.apiPaths.ciudad, ciudadRoutes);
    // this.app.use(this.apiPaths.wompi, wompiRoutes);
    // this.app.use(this.apiPaths.calificacion, calificacionRoutes);
    // this.app.use(this.apiPaths.choofer, chooferRoutes);
    // // this.app.use(this.apiPaths.usuarios, usuarioRoutes);

    // //DASHBOARD ROUTE
    // this.app.use(this.apiPaths.users, usuarioAdminDashboard);
    // this.app.use(this.apiPaths.services, serviceAdminDashboard);
    // this.app.use(this.apiPaths.datos, datosAdminDashboard);
    // this.app.use(this.apiPaths.inicio, inicioEntradaAdminDashboard);
    // this.app.use(this.apiPaths.nosotros, nosotrosEntradaAdminDashboard);
    // this.app.use(this.apiPaths.funciona, funcionaEntradaAdminDashboard);
    // this.app.use(
    //   this.apiPaths.chooferservicios,
    //   chooferserviciosEntradaAdminDashboard
    // );
    // this.app.use(this.apiPaths.precios, preciosAdminDashboard);
    // this.app.use(this.apiPaths.fecha, fechaAdminDashboard);
    // this.app.use(this.apiPaths.hora, horaAdminDashboard);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puertooo" + this.port);
    });
    //   this.sslServer.listen(this.port, () => {
    //     console.log('Servidor corriendo en puerto HTTPS::  ' + this.port);
    // });
  }
}

export default Server;
