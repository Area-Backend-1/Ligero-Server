import { DataTypes } from "sequelize";
import db from "../db/connection";
import Rol from "./rol";
import Ciudad from "./ciudad";
import Usuario from "./usuario";

const Natural = db.define("naturales", {
  nom_nat: {
    type: DataTypes.STRING,
  },
  tip_doc: {
    type: DataTypes.STRING,
  },
  doc_nat: {
    type: DataTypes.STRING,
  },
  tel_nat: {
    type: DataTypes.STRING,
  },
});

Natural.belongsTo(Ciudad, {
  foreignKey: {
    name: "ciu_nat",
  },
});

Natural.belongsTo(Usuario, {
  foreignKey: {
    name: "usu_nat",
  },
});

export default Natural;
