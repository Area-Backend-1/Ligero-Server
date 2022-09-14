import { DataTypes } from "sequelize";
import db from "../db/connection";
import Rol from "./rol";

const Ciudad = db.define("ciudades", {
  nom_ciu: {
    type: DataTypes.STRING,
  },
  est_ciu: {
    type: DataTypes.BOOLEAN,
  },
});

export default Ciudad;
