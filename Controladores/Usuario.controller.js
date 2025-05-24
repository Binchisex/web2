import * as usuarioModel from "../Modelos/Usuario.modelo.js";

//todos los usuarios
export const obtenerUsuarios = async (req, res) => {
  const usuarios = await usuarioModel.obtenerUsuarios();
  res.json(usuarios);
  };
//crear
export const crearUsuario = async (req, res) => {
      const nuevoUsuario = await usuarioModel.crearUsuario(req.body);
      res.json({
        success: true
      });
  };
//obtener id
export const obtenerUsuariosID = async (req,res) => {
try {
    const usuario = await usuarioModel.obtenerUsuariosID(req.params.id);
    res.json(usuario);
}catch(error){
    res.status(500).json({ error: "Error al obtener usuarios" });
    }
};
//actualizar
export const actualizarUsuario = async (req,res) => {
    try{
        const usuarioActualizado = await usuarioModel.actualizarUsuario(req.param.id,req.body);
        res.json(usuarioActualizado);
    }catch(error){
        res.status(500).json({error:"Error al actualizar el usuario"});
    }
}
//eliminar
export const eliminarUsuario = async (req, res) => {
    try {
      await usuarioModel.eliminarUsuario(req.params.id);
      res.json({ mensaje: "Usuario eliminado correctamente" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar usuario" });
    }
  };
  //Iniciar sesion
  export const loginUsuario = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const usuario = await usuarioModel.inicarsesionUsuario(email);
      console.log(usuario);
  
      if (!usuario) {
        return res.status(401).json({ success: false, message: "Usuario no encontrado" });
      }
  
      if (usuario.password !== password) {
        return res.status(401).json({ success: false, message: "Contraseña incorrecta" });
      }
  
      res.status(200).json({ success: true, usuario });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error en el servidor" });
      console.log(error);
    }
  };
  