import { Request, response, Response } from "express";
import axios from "axios";
import generarJWT from "../helpers/generar-jwt";
import { Op } from "sequelize";
import Categoria from "../models/categoria";

export const getCategoria = async (req: Request, res: Response) => {
  const { usuario, uid } = req.params;

  try {
    const cat = await Categoria.findAll({
      // where: { id_orden: 303 },
      attributes: ["id", "nom_cat"],
    });

    res.json({
      ruta: cat,
    });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({
      msg: "Hable con el administrador 0001",
    });
  }
};
