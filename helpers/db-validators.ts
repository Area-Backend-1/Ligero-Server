import Rol from "../models/rol";
import Usuario from "../models/usuario";

//Verificar rol existe
export const rolValido = async (rol_id = 0) => {
  const existeRol = await Rol.findOne({
    where: { id: rol_id },
  });

  if (!existeRol) {
    throw new Error(`Por favor verifique el rol`);
  }
};

//Verificar email existe
export const emailExiste = async (correo: "") => {
  const existeEmail = await Usuario.findOne({
    where: { correo: correo },
  });
  if (existeEmail) {
    throw new Error(`Ya existe un usuario con ese email: ${correo}`);
  }
};

//Verificar existe usuario
export const existeUsuario = async (id: "") => {
  const existeUsuario = await Usuario.findOne({
    where: { id: id },
  });
  if (!existeUsuario) {
    throw new Error(`No existe un usuario para ese id: ${id}`);
  }
};

//Verificar Coleccion Upload
export const coleccionesPermitidas = (
  coleccion = "",
  colecciones = [] as any
) => {
  const incluida = colecciones.includes(coleccion);
  if (!incluida) {
    throw new Error(
      `La colección ${coleccion} no es permitida, ${colecciones}`
    );
  }
  return true;
};

export default { rolValido, emailExiste, existeUsuario, coleccionesPermitidas };
