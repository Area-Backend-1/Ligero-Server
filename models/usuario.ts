import { DataTypes } from "sequelize";
import db from "../db/connection";
import Rol from "./rol";

const Usuario = db.define("usuarios", {
  correo: {
    type: DataTypes.STRING,
  },
  passwd: {
    type: DataTypes.STRING,
  },
  est_usu: {
    type: DataTypes.BOOLEAN,
  },
  // etiqueta:{
  //     type: DataTypes.STRING
  // },
});
Usuario.belongsTo(Rol, {
  foreignKey: {
    name: "id_rol",
  },
});

export default Usuario;
