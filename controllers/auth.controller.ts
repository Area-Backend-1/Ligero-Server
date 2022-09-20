import { Request, response, Response } from "express";
import Usuario from "../models/usuario";
import bcryptjs from "bcryptjs";
import generarJWT from "../helpers/generar-jwt";
import Natural from "../models/natural";

export const login = async (req: Request, res: Response) => {
  const { correo, passwd } = req.body;

  try {
    //Buscar usuario por correo
    const usuario = await Usuario.findOne({
      where: { correo: correo },
    });

    //Validar existe usuario
    if (!usuario) {
      return res.status(400).json({
        errors: [{ msg: "Usuario o password no son correctos" }],
      });
    }

    //Convertir modelo a objeto
    const oUsuario = usuario!.get({ plain: true });

    //Validar Password
    const validPassword = bcryptjs.compareSync(passwd, oUsuario.passwd);

    if (!validPassword) {
      return res.status(400).json({
        errors: [{ msg: "Usuario o contraseña incorrecta" }],
      });
    }

    //Generar JWT
    console.log("PRINT LOGIN");

    const token = await generarJWT(oUsuario.id);
    console.log("PRINT LOGIN");
    console.log(token);

    res.json({
      usuario,
      token,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hable con el administrador 0001",
    });
  }
};

export const registerUsuarioNatural = async (req: Request, res: Response) => {
  const { correo, passwd, nomNat, tipDoc, docNat, ciuNat, telNat } = req.body;
  try {
    // //Encriptar password
    const dificultad = bcryptjs.genSaltSync();

    //REGISTRO USUARIO
    const usuario = await Usuario.create({
      correo: correo,
      passwd: bcryptjs.hashSync(passwd, dificultad),
      est_usu: true,
      id_rol: 2,
    });
    const user = usuario!.get({ plain: true });

    //REGISTRO CONTADOR
    const natural = await Natural.create({
      nom_nat: nomNat,
      tip_doc: tipDoc,
      doc_nat: docNat,
      ciu_nat: ciuNat,
      tel_nat: telNat,
      usu_nat: user.id,
    });
    const natu = natural!.get({ plain: true });

    //Generar JWT
    console.log("PRINT LOGIN");
    const token = await generarJWT(user.id);

    console.log("PRINT LOGIN");
    console.log(token);

    // //Borrar password del object
    delete user.password;
    res.json({
      user,
      natu,
      token,
      ok: true,
    });
    console.log("Natural::", req.body);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador 0002",
    });
  }
};

export const renewToken = async (req: Request, res: Response) => {
  const { usuario, uid } = req.params;

  const user: any = usuario;

  const token = await generarJWT(uid);

  delete user.password;
  res.json({
    user,
    token,
  });
};
