import { DataTypes } from "sequelize";
import db from "../db/connection";

const Categoria = db.define("categorias", {
  nom_cat: {
    type: DataTypes.STRING,
  },
});

export default Categoria;
