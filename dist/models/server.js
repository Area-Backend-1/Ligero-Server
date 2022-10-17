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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = __importDefault(require("../routers/auth.route"));
const categorias_route_1 = __importDefault(require("../routers/categorias.route"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
// import { crontabConstructor } from '../helpers/crontab';
class Server {
    constructor() {
        this.apiPaths = {
            categorias: "/api/categorias",
            auth: "/api/auth",
            //dashboard route
            // users: "/api/dashboard/users",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8001";
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
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log("Db online");
            }
            catch (error) {
                throw new Error();
            }
        });
    }
    middlewares() {
        // CORS
        this.app.use((0, cors_1.default)());
        //Lectura Body
        this.app.use(express_1.default.json());
        //Carpeta Publica
        this.app.use(express_1.default.static("public"));
        //Carga de archivos
        this.app.use((0, express_fileupload_1.default)({
            useTempFiles: true,
            tempFileDir: "/tmp/",
            createParentPath: true,
        }));
    }
    routes() {
        this.app.use(this.apiPaths.auth, auth_route_1.default);
        this.app.use(this.apiPaths.categorias, categorias_route_1.default);
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
            console.log("Este servidor está corriendo en el siguiente puerto: " + this.port);
        });
        //   this.sslServer.listen(this.port, () => {
        //     console.log('Servidor corriendo en puerto HTTPS::  ' + this.port);
        // });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map