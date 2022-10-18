import { Request, response, Response } from "express";
import axios from "axios";
import generarJWT from "../helpers/generar-jwt";
import { Op } from "sequelize";
import Categoria from "../models/categoria";
import Usuario from '../models/usuario';

export const getUsuario = async (req: Request, res: Response) => {
  const { usuario, uid } = req.params;

  try {
    const usu = await Usuario.findAll({
      // where: { id_orden: 303 },
      attributes: ["id", "correo"],
    });

    res.json({
      ruta: usu,
    });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({
      msg: "Hable con el administrador 0001",
    });
  }
};
