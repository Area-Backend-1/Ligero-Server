import { DataTypes } from "sequelize";
import db from "../db/connection";
import Ciudad from "./ciudad";
import Usuario from "./usuario";

const Empresa = db.define("empresas", {
  emp_usu: {
    type: DataTypes.STRING,
  },
  nit_emp: {
    type: DataTypes.STRING,
  },
  nom_con: {
    type: DataTypes.STRING,
  },
  dir_emp: {
    type: DataTypes.STRING,
  },
  tel_emp: {
    type: DataTypes.STRING,
  },
});

Empresa.belongsTo(Ciudad, {
  foreignKey: {
    name: "ciu_emp",
  },
});

Empresa.belongsTo(Usuario, {
  foreignKey: {
    name: "usu_emp",
  },
});

export default Empresa;
