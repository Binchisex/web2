import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Crear usuario
export const crearUsuario = async (req, res) => {
  const { nombre, apellidos, email, password, fechaDeNacimiento } = req.body;

  try {
    const usuarioExistente = await prisma.user.findUnique({
      where: { email },
    });

    if (usuarioExistente) {
      return res.status(400).json({ success: false, message: "El correo ya está registrado" });
    }

    const nuevoUsuario = await prisma.user.create({
      data: {
        nombre,
        apellidos,
        email,
        password,
        fechaDeNacimiento: new Date(fechaDeNacimiento),
      }
    });

    res.status(201).json({ success: true, usuario: nuevoUsuario });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error al crear usuario" });
  }
};

// Login
export const loginUsuario = async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await prisma.user.findUnique({
      where: { email },
    });

    if (!usuario || usuario.password !== password) {
      return res.status(401).json({ success: false, message: "Credenciales inválidas" });
    }

    res.status(200).json({ success: true, usuario });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
};

// Obtener todos los usuarios
export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await prisma.user.findMany();
    res.status(200).json({ success: true, usuarios });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error al obtener los usuarios" });
  }
};

// Obtener un usuario por ID
export const obtenerUsuariosID = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await prisma.user.findUnique({
      where: { id: parseInt(id) }
    });

    if (!usuario) {
      return res.status(404).json({ success: false, message: "Usuario no encontrado" });
    }

    res.status(200).json({ success: true, usuario });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error al buscar el usuario" });
  }
};

// Actualizar usuario
export const actualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellidos, email, password } = req.body;

  try {
    const usuario = await prisma.user.update({
      where: { id: parseInt(id) },
      data: {
        nombre,
        apellidos,
        email,
        password
      }
    });

    res.status(200).json({ success: true, usuario });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error al actualizar el usuario" });
  }
};

// Eliminar usuario
export const eliminarUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.user.delete({
      where: { id: parseInt(id) }
    });

    res.status(200).json({ success: true, message: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error al eliminar el usuario" });
  }
};
